import React, { useEffect } from 'react'
import Link from './link/links5'
import { useDispatch,useSelector } from 'react-redux'
import { GetData } from '../actions/action';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Spost,Dpost } from '../actions/action';

export default function ShowPost() {
const dispatch = useDispatch();
const navigate = useNavigate();
const data = useSelector((state)=> state.userReducer?.users?.posts)
const deltpost = useSelector((state)=> state.userReducer?.deleteData)
console.log(4343,data)

    useEffect(()=>{
        dispatch(GetData());
    },[deltpost]);

    function Singlepost(id)
    {
      console.log(677687,id)
      dispatch(Spost(id))
      navigate(`/singlepost/${id}`);
    }
   function Deletepost(id)
     {
       dispatch(Dpost(id))
     }
    function uptPost(id)
    {
     navigate(`/uptpost/${id}`)
    }

  return (
    <div>
        <Link/>
        <h1>Dashboard </h1>
        <Table striped bordered hover className='container'>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>User_Id</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
   
     
      {data?.map((i,index)=>{
            return (
          <tr key= {index}>
          <td>{i.id}</td>
          <td>{i.title}</td>
          <td>{i.description}</td>
          <td>{i.user_id}</td>
          <td><Button variant="primary" onClick={()=>Singlepost(i.id)}> view</Button>&nbsp;&nbsp;
           <Button variant="success" onClick={()=>uptPost(i.id)} >Edit</Button> &nbsp;
           <Button variant="danger" onClick={()=>Deletepost(i.id)}>Delete</Button></td>&nbsp;
          </tr>)
        })}
  
    
  </tbody>
</Table>
        
    </div>
  )
}
