
export default function User({ item }) {
    return (
        <div className="flex w-72 justify-between rounded-lg px-6 py-4 border">
            <h1>{item.name}</h1>
            <h1>{item.country}</h1>
        </div>
    )
}
