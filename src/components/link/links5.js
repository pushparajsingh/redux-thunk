import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {Deletedata} from '../../actions/action'



export default function Links() {
const navigate = useNavigate();

async function logout()
  {
    localStorage.removeItem('user-info')
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    window.location.href='./login'
    await Deletedata();

  }
  return (
    <div>
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      
      <Link to="#" className='text' onClick={logout}>Logout</Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
</>
    </div>
  )
}
