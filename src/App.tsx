import "./index.css"

function App() {
  localStorage.setItem("bookmarkInjector", "")
  return (
    <>
      <div className="p-4 pb-2 text-base">
        <h1 className=" text-xl">Setting</h1>
        <p>default</p>
        <p>open close</p>
      </div>
    </>
  )
}

export default App
