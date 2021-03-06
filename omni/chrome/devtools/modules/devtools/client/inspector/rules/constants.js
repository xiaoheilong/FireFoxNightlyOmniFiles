/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

// The PageStyle actor flattens the DOM CSS objects a little bit, merging
// Rules and their Styles into one actor. For elements (which have a style
// but no associated rule) we fake a rule with the following style id.
exports.ELEMENT_STYLE = 100;

// An array of the possible color schemes that can be emulated.
exports.COLOR_SCHEMES = [null, "dark", "light"];

// Compatibility tooltip message id shared between the
// models/text-property.js and the tooltip tests
exports.COMPATIBILITY_TOOLTIP_MESSAGE = {
  default: "css-compatibility-default-message",
  deprecated: "css-compatibility-deprecated-message",
  "deprecated-experimental":
    "css-compatibility-deprecated-experimental-message",
  "deprecated-experimental-supported":
    "css-compatibility-deprecated-experimental-supported-message",
  "deprecated-supported": "css-compatibility-deprecated-supported-message",
  experimental: "css-compatibility-experimental-message",
  "experimental-supported": "css-compatibility-experimental-supported-message",
};
