import { useState, useEffect, useRef } from 'react'

export default function MyPage() {
  const [clicks, setClicks] = useState(0)
  const [greeting, setGreeting] = useState('')
  const nameRef = useRef(null)

  useEffect(() => {
    setGreeting('Welcome to my React page!')
  }, [])

  const handleClick = () => {
    setClicks((prev) => prev + 1)
    nameRef.current?.focus()
  }

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold">
        Retno Shintya Hariyani – 2540127370
      </h1>

      <p className="mt-2 text-gray-700">
        I am a Computer Science student with a strong interest in Front-End
        Development, actively learning modern frameworks like React.
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-blue-600">
        {greeting}
      </h2>

      <div className="mt-4">
        <input
          ref={nameRef}
          type="text"
          placeholder="Type your name..."
          className="border border-gray-300 px-3 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={handleClick}
        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Click Me!
      </button>

      <p classname="mt-3">You clicked {clicks} times.</p>
    </div>
  )
}
