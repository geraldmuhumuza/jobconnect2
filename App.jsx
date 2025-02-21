import { useState } from 'react'
import JobBoard from './JobBoard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JobBoard/>
    </>
  )
}

export default App
