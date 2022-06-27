import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Logout from '../logup'
import Page from '../page'
import Dashboard from '../dashboard'
import CreatePost from '../createpost'
import Singlepost from '../singlepost'
import { UpdatePost } from '../updatePost'

export default function Routers() {
  const user = localStorage.getItem('user-info');
  return (
    <div>
        <Routes>
          {user ? <>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/cPost' element={<CreatePost/>} />
            <Route path='/singlepost/:id' element={<Singlepost/>}/>
            <Route path='/uptpost/:id' element={<UpdatePost/>}/>
            </> : <>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>} />
            </> }
            <Route path='/' element={<Home/>} />
             <Route path='*' element={<Page/>} />
        </Routes>
           
    </div>
  )
}
