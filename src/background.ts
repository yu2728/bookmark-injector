

chrome.runtime.onMessage.addListener(
  (
    query: string,
    _: chrome.runtime.MessageSender,
    sendResponse: (response: any) => void
  ) => {
    console.log(query)
    chrome.bookmarks.search(query).then(result => {
      console.log(result)
      return sendResponse(result)
    })
    return true
  })