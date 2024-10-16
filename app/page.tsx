import React from 'react'
import { useState } from 'react'

const Page = () => {
const [count, setcount] = useState(0)

  let x = 1
  let updateNumber = () => {
    count + x
  }
  return (
    <div>
      <h1>
        i have {x}
      </h1>

      <button onClick={updateNumber}> clik</button>
    </div>
  )
}

export default Page
