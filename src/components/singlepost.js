import React from 'react'
import { useSelector } from 'react-redux'
import Link from './link/links6'


export default function Singlepost() {
  const data = useSelector((state)=>state.userReducer?.single);
  console.log(234324,data)

  return (
    <div>
      <Link/>
      <h1>hello world</h1>
      <table border={"2px solid red"}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          </tr>
        <tr>
        <td>{data.post?.id}</td>
      <td>{data.post?.title}</td>
      <td>{data.post?.description}</td>
      </tr>
</table>
  </div>
  )
}
