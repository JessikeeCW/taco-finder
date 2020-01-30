// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('button1');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = 'white';
  changeColor.setAttribute('value', data.color);
});


/* changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
}; */

changeColor.onclick = function(element) {
  //let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.location.href = \'https://www.yelp.com/nearme/tacos\';'});
  });
};