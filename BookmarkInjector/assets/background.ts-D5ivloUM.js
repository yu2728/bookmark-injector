chrome.runtime.onMessage.addListener((e,n,r)=>(console.log(e),chrome.bookmarks.search(e).then(o=>(console.log(o),r(o))),!0));
