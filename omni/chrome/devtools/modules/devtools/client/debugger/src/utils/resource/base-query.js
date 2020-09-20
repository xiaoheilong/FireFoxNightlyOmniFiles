"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMapWithArgs = makeMapWithArgs;
exports.makeResourceQuery = makeResourceQuery;
loader.lazyRequireGetter(this, "_core", "devtools/client/debugger/src/utils/resource/core");
loader.lazyRequireGetter(this, "_compare", "devtools/client/debugger/src/utils/resource/compare");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
function makeMapWithArgs(map) {
  const wrapper = (resource, identity, args) => map(resource, identity, args);

  wrapper.needsArgs = true;
  return wrapper;
}

function makeResourceQuery({
  cache,
  filter,
  map,
  reduce,
  resultCompare
}) {
  const loadResource = makeResourceMapper(map);
  return cache((state, context, existing) => {
    const ids = filter((0, _core.getResourceValues)(state), context.args);
    const mapped = ids.map(id => loadResource(state, id, context));

    if (existing && (0, _compare.arrayShallowEqual)(existing.mapped, mapped)) {
      // If the items are exactly the same as the existing ones, we return
      // early to reuse the existing result.
      return existing;
    }

    const reduced = reduce(mapped, ids, context.args);

    if (existing && resultCompare(existing.reduced, reduced)) {
      return existing;
    }

    return {
      mapped,
      reduced
    };
  });
}

function makeResourceMapper(map) {
  return map.needsArgs ? makeResourceArgsMapper(map) : makeResourceNoArgsMapper(map);
}
/**
 * Resources loaded when things care about arguments need to be given a
 * special ResourceIdentity object that correlates with both the resource
 * _and_ the arguments being passed to the query. That means they need extra
 * logic when loading those resources.
 */


function makeResourceArgsMapper(map) {
  const mapper = (value, identity, context) => map(value, getIdentity(context.identMap, identity), context.args);

  return (state, id, context) => getCachedResource(state, id, context, mapper);
}

function makeResourceNoArgsMapper(map) {
  const mapper = (value, identity, context) => map(value, identity);

  return (state, id, context) => getCachedResource(state, id, context, mapper);
}

function getCachedResource(state, id, context, map) {
  const validatedState = (0, _core.getValidatedResource)(state, id);

  if (!validatedState) {
    throw new Error(`Resource ${id} does not exist`);
  }

  return map(validatedState.values[id], validatedState.identity[id], context);
}

function getIdentity(identMap, identity) {
  let ident = identMap.get(identity);

  if (!ident) {
    ident = (0, _core.makeIdentity)();
    identMap.set(identity, ident);
  }

  return ident;
}