"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncActionAsValue = asyncActionAsValue;
exports.promise = promiseMiddleware;
exports.PROMISE = void 0;

var _lodash = require("devtools/client/shared/vendor/lodash");

loader.lazyRequireGetter(this, "_DevToolsUtils", "devtools/client/debugger/src/utils/DevToolsUtils");
loader.lazyRequireGetter(this, "_asyncValue", "devtools/client/debugger/src/utils/async-value");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
function asyncActionAsValue(action) {
  if (action.status === "start") {
    return (0, _asyncValue.pending)();
  }

  if (action.status === "error") {
    return (0, _asyncValue.rejected)(action.error);
  }

  return (0, _asyncValue.fulfilled)(action.value);
}

let seqIdVal = 1;

function seqIdGen() {
  return seqIdVal++;
}

function filterAction(action) {
  return (0, _lodash.fromPairs)((0, _lodash.toPairs)(action).filter(pair => pair[0] !== PROMISE));
}

function promiseMiddleware({
  dispatch,
  getState
}) {
  return next => action => {
    if (!(PROMISE in action)) {
      return next(action);
    }

    const promiseInst = action[PROMISE];
    const seqId = seqIdGen().toString(); // Create a new action that doesn't have the promise field and has
    // the `seqId` field that represents the sequence id

    action = { ...filterAction(action),
      seqId
    };
    dispatch({ ...action,
      status: "start"
    }); // Return the promise so action creators can still compose if they
    // want to.

    return Promise.resolve(promiseInst).finally(() => new Promise(resolve => (0, _DevToolsUtils.executeSoon)(resolve))).then(value => {
      dispatch({ ...action,
        status: "done",
        value: value
      });
      return value;
    }, error => {
      dispatch({ ...action,
        status: "error",
        error: error.message || error
      });
      return Promise.reject(error);
    });
  };
}

const PROMISE = "@@dispatch/promise";
exports.PROMISE = PROMISE;