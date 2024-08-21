import React, { useEffect, useState } from 'react'

export default function LifeCycle() {
    const [count, setCount] = useState(0)

    // Her mount veya update durumunda çalışır
    useEffect(() => {
        console.log("Her mount veya update durumunda çalışır");
    })

    // Componentimiz ilk mount edildiğinde çalışır
    useEffect(() => {
        console.log("Componentimiz ilk mount edildiğinde çalışır");
    }, [])

    //State'imiz mount edildiğinde veya güncellendiğinde çalışır
    useEffect(() => {
        console.log("State'imiz mount edildiğinde veya güncellendiğinde çalışır");
    }, [count])

    //Componentimizin unMount durumu
    useEffect(() => {

        return () => {
            console.log("Unmount durumu");
        }
    }, [])

    return (
        <div className='flex gap-10'>
            <div>
                <p>Count değeri: {count}</p>
                <button onClick={() => setCount(count + 1)}>Button</button>
            </div>

        </div>
    )
}
