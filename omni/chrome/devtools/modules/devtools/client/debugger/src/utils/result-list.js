"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollList = scrollList;

var _devtoolsEnvironment = require("devtools/client/debugger/dist/vendors").vendored["devtools-environment"];

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
function scrollList(resultList, index) {
  if (!resultList.hasOwnProperty(index)) {
    return;
  }

  const resultEl = resultList[index];

  const scroll = () => {
    if ((0, _devtoolsEnvironment.isFirefox)()) {
      // Avoid expensive DOM computations involved in scrollIntoView
      // https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/
      requestAnimationFrame(() => {
        setTimeout(() => {
          resultEl.scrollIntoView({
            block: "nearest",
            behavior: "auto"
          });
        });
      });
    } else {
      chromeScrollList(resultEl, index);
    }
  };

  scroll();
}

function chromeScrollList(elem, index) {
  const resultsEl = elem.parentNode;

  if (!resultsEl || resultsEl.children.length === 0) {
    return;
  } // Avoid expensive DOM computations (reading clientHeight)
  // https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/


  requestAnimationFrame(() => {
    setTimeout(() => {
      const resultsHeight = resultsEl.clientHeight;
      const itemHeight = resultsEl.children[0].clientHeight;
      const numVisible = resultsHeight / itemHeight;
      const positionsToScroll = index - numVisible + 1;
      const itemOffset = resultsHeight % itemHeight;
      const scroll = positionsToScroll * (itemHeight + 2) + itemOffset;
      resultsEl.scrollTop = Math.max(0, scroll);
    });
  });
}