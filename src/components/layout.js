import React from 'react'
import { Link, useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams()
  return (
    <div className="container">
      <div classname="layout-1">      Page  {id}
        <Link to="/" > Back</Link></div>
      <div classname="layout-2">Page  {id} 
        <Link to="/" > Back</Link></div>

    </div>

  )
}
