

export function getEngine(url: URL): string {
    if (url.hostname.includes("google")) {
        return "google"
    }
    if (url.hostname.includes("yahoo")) {
        return "yahoo"
    }
    if (url.hostname.includes("duckduckgo")) {
        return "duckduckgo"
    }
    return ""
}

export default function getParentElement(engine: string): HTMLElement | null{
    switch(engine){
        case "google":
            return document.getElementById("appbar")
        case "yahoo":
            return document.getElementsByClassName("Contents__innerGroupHeader")[0] as HTMLElement
        case "duckduckgo":
            return document.getElementById("links_wrapper")
        default:
            return null
    }
}