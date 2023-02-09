import { Link, useParams } from "react-router-dom";


export function Book() {
  const { id } = useParams()
  return ( 
    <>
      <h1>Book {id} </h1>
      <Link to="/" > Back</Link>
    </>
  )
}