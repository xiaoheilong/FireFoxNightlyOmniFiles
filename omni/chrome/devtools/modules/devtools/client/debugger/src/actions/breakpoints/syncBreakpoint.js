"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncBreakpoint = syncBreakpoint;
loader.lazyRequireGetter(this, "_breakpointPositions", "devtools/client/debugger/src/actions/breakpoints/breakpointPositions");
loader.lazyRequireGetter(this, "_symbols", "devtools/client/debugger/src/actions/sources/symbols");
loader.lazyRequireGetter(this, "_breakpoint", "devtools/client/debugger/src/utils/breakpoint/index");
loader.lazyRequireGetter(this, "_location", "devtools/client/debugger/src/utils/location");

var _devtoolsSourceMap = require("devtools/client/shared/source-map/index.js");

loader.lazyRequireGetter(this, "_selectors", "devtools/client/debugger/src/selectors/index");
loader.lazyRequireGetter(this, "_", "devtools/client/debugger/src/actions/breakpoints/index");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
async function findBreakpointPosition(cx, {
  getState,
  dispatch
}, location) {
  const {
    sourceId,
    line
  } = location;
  const positions = await dispatch((0, _breakpointPositions.setBreakpointPositions)({
    cx,
    sourceId,
    line
  }));
  const position = (0, _breakpoint.findPosition)(positions, location);
  return position === null || position === void 0 ? void 0 : position.generatedLocation;
}

async function findNewLocation(cx, {
  name,
  offset,
  index
}, location, source, thunkArgs) {
  const symbols = await thunkArgs.dispatch((0, _symbols.setSymbols)({
    cx,
    source
  }));
  const func = symbols ? (0, _breakpoint.findFunctionByName)(symbols, name, index) : null; // Fallback onto the location line, if we do not find a function.

  let {
    line
  } = location;

  if (func) {
    line = func.location.start.line + offset.line;
  }

  return {
    line,
    column: location.column,
    sourceUrl: source.url,
    sourceId: source.id
  };
} // Breakpoint syncing occurs when a source is found that matches either the
// original or generated URL of a pending breakpoint. A new breakpoint is
// constructed that might have a different original and/or generated location,
// if the original source has changed since the pending breakpoint was created.
// There are a couple subtle aspects to syncing:
//
// - We handle both the original and generated source because there is no
//   guarantee that seeing the generated source means we will also see the
//   original source. When connecting, a breakpoint will be installed in the
//   client for the generated location in the pending breakpoint, and we need
//   to make sure that either a breakpoint is added to the reducer or that this
//   client breakpoint is deleted.
//
// - If we see both the original and generated sources and the source mapping
//   has changed, we need to make sure that only a single breakpoint is added
//   to the reducer for the new location corresponding to the original location
//   in the pending breakpoint.


function syncBreakpoint(cx, sourceId, pendingBreakpoint) {
  return async thunkArgs => {
    const {
      getState,
      client,
      dispatch
    } = thunkArgs;
    (0, _breakpoint.assertPendingBreakpoint)(pendingBreakpoint);
    const source = (0, _selectors.getSource)(getState(), sourceId);
    const generatedSourceId = (0, _devtoolsSourceMap.isOriginalId)(sourceId) ? (0, _devtoolsSourceMap.originalToGeneratedId)(sourceId) : sourceId;
    const generatedSource = (0, _selectors.getSource)(getState(), generatedSourceId);

    if (!source || !generatedSource) {
      return;
    }

    const {
      location,
      generatedLocation,
      astLocation
    } = pendingBreakpoint;
    const sourceGeneratedLocation = (0, _location.createLocation)({ ...generatedLocation,
      sourceId: generatedSourceId
    });

    if (source == generatedSource && location.sourceUrl != generatedLocation.sourceUrl) {
      // We are handling the generated source and the pending breakpoint has a
      // source mapping. Supply a cancellation callback that will abort the
      // breakpoint if the original source was synced to a different location,
      // in which case the client breakpoint has been removed.
      const breakpointLocation = (0, _breakpoint.makeBreakpointLocation)(getState(), sourceGeneratedLocation);
      return dispatch((0, _.addBreakpoint)(cx, sourceGeneratedLocation, pendingBreakpoint.options, pendingBreakpoint.disabled, () => !client.hasBreakpoint(breakpointLocation)));
    }

    const previousLocation = { ...location,
      sourceId
    };
    const newLocation = await findNewLocation(cx, astLocation, previousLocation, source, thunkArgs);
    const newGeneratedLocation = await findBreakpointPosition(cx, thunkArgs, newLocation);

    if (!newGeneratedLocation) {
      // We couldn't find a new mapping for the breakpoint. If there is a source
      // mapping, remove any breakpoints for the generated location, as if the
      // breakpoint moved. If the old generated location still maps to an
      // original location then we don't want to add a breakpoint for it.
      if (location.sourceUrl != generatedLocation.sourceUrl) {
        dispatch((0, _.removeBreakpointAtGeneratedLocation)(cx, sourceGeneratedLocation));
      }

      return;
    }

    const isSameLocation = (0, _location.comparePosition)(generatedLocation, newGeneratedLocation); // If the new generated location has changed from that in the pending
    // breakpoint, remove any breakpoint associated with the old generated
    // location.

    if (!isSameLocation) {
      dispatch((0, _.removeBreakpointAtGeneratedLocation)(cx, sourceGeneratedLocation));
    }

    return dispatch((0, _.addBreakpoint)(cx, newLocation, pendingBreakpoint.options, pendingBreakpoint.disabled));
  };
}