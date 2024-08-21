import React, { useContext } from 'react'
import { MyContext } from './context/MyContextProvider'

export default function MyComponent() {
    const { count, setCount } = useContext(MyContext)

    return (
        <div>
            <p>Count değeri: {count}</p>
            <button onClick={() => setCount(count + 1)}>Button</button>
        </div>
    )
}
