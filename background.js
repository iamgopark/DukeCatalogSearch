chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
		"id": "searchDUL",
        "title": 'Find Books at Duke, %s',
        "contexts": ["selection"]
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({  
        url: "https://find.library.duke.edu/?utf8=%E2%9C%93&search_field=all_fields&q=" + encodeURIComponent(info.selectionText)
    });
})