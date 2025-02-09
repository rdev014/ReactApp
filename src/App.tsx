import { useState } from "react"

function App() {
  const [count, setCount] = useState(1)

  const Increment =()=> setCount(count + 1)
  const Decrement =()=> setCount(count - 1)
  if (count === 0) {
    alert ('Not Allowed')
  }
 

  return (
    <div className="text-center bg-gray-950 min-h-screen">
      <h2 className="text-green-500 font-bold text-6xl py-12">{count}</h2>
      <button onClick={Increment} className="bg-blue-100 text-black rounded-xl px-4 text-4xl font-bold">+</button>
      <button onClick={Decrement} className="bg-blue-100 text-black rounded-xl px-4 text-4xl font-bold ml-6">-</button>
    </div>
  )
}

export default App
