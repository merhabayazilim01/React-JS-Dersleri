import React, { useState } from 'react'
import LifeCycle from './LifeCycle'

export default function App() {
  const [visible, setVisible] = useState(true)

  return (
    <div className='p-10'>
      {visible && <LifeCycle />}
      <button className='rounded px-2 py-1.5 border-2 border-black' onClick={() => setVisible(!visible)}> {visible ? "Gizle" : "Göster"} </button>
    </div>
  )
}
