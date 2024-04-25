import React from "react"
import ReactDOM from "react-dom/client";
import Bookmarks from "./Bookmarks";
import getParentElement, { getEngine } from "./engine";

const url = new URL(window.location.href)
const engine = getEngine(url)
const parentElement = getParentElement(engine)
const root = document.createElement("div");
root.id = "crx-root";

parentElement?.appendChild(root);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Bookmarks />
    </React.StrictMode>
  );