// background.js

// chrome.browserAction.onClicked.addListener(function (activeTab) {
//   chrome.tabs.create({ url: chrome.extension.getURL('index.html') });
// });

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});