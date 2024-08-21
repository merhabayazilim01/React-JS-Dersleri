import React, { useState } from 'react'

export default function App() {
  const [checked, setChecked] = useState(false)

  console.log(checked);

  const onclick = () => {
    setChecked(false)
  }

  return (
    <div className='flex items-center gap-10 justify-center h-screen'>
      <input
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className='border outline-none rounded-lg border-2 border-black px-2 py-1.5'
        type="checkbox" />
      <button onClick={onclick}>Button</button>
    </div>
  )
}
