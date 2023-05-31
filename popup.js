chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];
  var currentDomain = new URL(currentTab.url).hostname;
  var queryResult = document.getElementById("queryResult");
  queryResult.textContent = "Querying WHOIS for domain: " + currentDomain;

  var queryUrl = "https://www.whois.com/whois/" + encodeURIComponent(currentDomain);
  chrome.tabs.create({ url: queryUrl });
});


