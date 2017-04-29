let toggle = false;
chrome.browserAction.onClicked.addListener((tab) => {
  toggle = !toggle;
  if(toggle) {
    chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {file: "on.js"});
  }
  else {
    chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {code: "location.reload()"});
  }
});
