import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [data, setData] = useState()
  const [formData, setFormData] = useState({
    name: "",
    surname: ""
  })

  useEffect(() => {
    axios.get("http://localhost:3000/api")
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post("http://localhost:3000/api/post", formData, {
      headers: {
        "x-api-key": "kcaoncnoasoc"
      }
    })
    console.log(res);

  }

  return (
    <div>
      <div>
        {data && data}
      </div>


      <div className='flex h-[60vh] w-full items-center justify-center flex-col'>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">İsim</label>
            <input className='w-96 outline-none border-black border rounded-lg px-2' onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Soyisim</label>
            <input className='w-96 outline-none border-black border rounded-lg px-2' onChange={(e) => setFormData((prev) => ({ ...prev, surname: e.target.value }))} />
          </div>
          <button type='submit' className='w-full my-4 py-1 bg-zinc-300 hover:bg-zinc-400 rounded-lg border-black border'>Gönder</button>
        </form>
      </div>


    </div>
  )
}
