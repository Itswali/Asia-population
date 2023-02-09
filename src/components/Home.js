import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Home
      <br />
      <br />
      <Link to="books/1" > Book 1</Link>
      <br />
      <br />
      <Link to="books/2" > Book 2</Link>
    
    </div>
  )
}
