import React, { useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()


    fetch("https://api/sign-in")

  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-lg w-full rounded-lg border-2 p-10 flex flex-col gap-6'>
        <h1 className='font-bold text-2xl'>Giriş Yap</h1>


        <form onSubmit={handleSubmit} className='flex flex-col gap-3 flex-1'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder='Email'
              type="text"
              id='email'
              className='outline-none border-2 px-2 py-1.5 flex-1 rounded-lg ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Şifre</label>
            <input
              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
              placeholder='Şifre'
              type="password"
              id='password'
              className='outline-none border-2 px-2 py-1.5 flex-1 rounded-lg' />
          </div>
          <button type='submit' className='bg-purple-600 rounded-lg flex-1 text-white py-2 hover:bg-purple-700 transition-colors'>Giriş Yap</button>
        </form>
      </div>
    </div>
  )
}
