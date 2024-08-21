import React, { useContext } from 'react'
import { MyContext } from './context/MyContextProvider'
import MyComponent from './MyComponent'

export default function App() {
  const { count, setCount } = useContext(MyContext)

  return (
    <>
      <div>
        <p>Count değeri: {count}</p>
        <button onClick={() => setCount(count + 1)}>Button</button>
      </div>
      <MyComponent />
    </>
  )
}
