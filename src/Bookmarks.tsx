import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import "./index.css"
import { getEngine } from "./engine"

export default function Bookmarks() {
    const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const url = new URL(window.location.href)

    function getSearchParams(url: URL): string {
        switch (getEngine(url)) {
            case "google":
                return url.searchParams.get("q") ?? ""
            case "yahoo":
                return url.searchParams.get("p") ?? ""
            case "duckduckgo":
                return url.searchParams.get("q") ?? ""
            default:
                return ""
        }
    }
    async function getBookmark(){
        chrome.runtime.sendMessage(getSearchParams(url), function(response: chrome.bookmarks.BookmarkTreeNode[]) {
            console.log(response)
            setBookmarks(response)
        })
    }
    useEffect(() => {
        getBookmark()
    }, [])
    return (
        <div className=" mr-4 dark:text-gray-400">
            <div className="text-xl border-b-2 border-dashed pb-2 inline-flex w-full items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    ⭐ {bookmarks.length} Bookmarks
                </span>
                <span className="px-2">
                    <motion.div animate={{rotate: isOpen ? 180 : 0}} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </motion.div>
                </span>
            </div>

            <motion.div animate={isOpen ? "open" : "closed"}
                variants={{ open: { y: 0, height: "" }, closed: { opacity: 0, y: 0, height: 0 } }}>
                <div className={`flex flex-col py-1 border-b-2 border-dashed`} >
                    {bookmarks.map(bookmark => {
                        return <Bookmark key={bookmark.id} bookmark={bookmark} />
                    })}
                </div>
            </motion.div>
        </div>
    )
}

function Bookmark({ bookmark }: { bookmark: chrome.bookmarks.BookmarkTreeNode }) {
    return (
        <>
            <a href={bookmark.url} className="py-2">
                <p className="text-gray-500 text-xs">
                    {bookmark.url}
                </p>
                <p className="text-xl">
                    {bookmark.title}
                </p>                
            </a>
        </>
    )
}