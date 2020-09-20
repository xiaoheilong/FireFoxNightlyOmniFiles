/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { RetVal, generateActorSpec } = require("devtools/shared/protocol");
const deviceSpec = generateActorSpec({
  typeName: "device",

  methods: {
    getDescription: { request: {}, response: { value: RetVal("json") } },
    screenshotToDataURL: {
      request: {},
      response: { value: RetVal("longstring") },
    },
  },
});

exports.deviceSpec = deviceSpec;
