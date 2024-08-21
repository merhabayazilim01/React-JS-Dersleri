import { useState } from "react"

export default function App() {

  const [state, setState] = useState("Merhaba")

  const handleFunc = () => {
    setState("Dünya!!")
  }

  return (
    <div onClick={handleFunc}>
      {state}
    </div>
  )
}
