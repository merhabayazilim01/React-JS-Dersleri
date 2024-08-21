import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='flex flex-col gap-5 py-4 px-10'>
      {data?.map((item) => (
        <div key={item.id}>
          <h3 className='font-bold text-xl cursor-pointer'>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}
