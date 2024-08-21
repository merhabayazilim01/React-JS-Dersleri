import User from "./components/user"

export default function App() {

  const data = [
    {
      id:1,
      name:"Furkan",
      age:20,
      country:"Türkiye"
    },
    {
      id:2,
      name:"John",
      age:35,
      country:"United Kingdom"
    },
  ]

  return (
    <div className="flex gap-3 flex-col items-center justify-center h-screen">
      {data?.map((item,index)=>(
        <User key={index} item={item} />
      ))}
    </div>
  )
}
