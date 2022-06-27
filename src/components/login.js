import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../actions/action';
import  LogUp from './link/links2'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export const notify = (a) => toast(a);

export default function Login() {
 
  const user = useSelector((state)=> state.userReducer.users);
  const dispatch = useDispatch ()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(22,data);
    dispatch(getLogin(data))
   
    console.log(3333,user);
    if(user && user.length !=0)
      {
       window.location.href="/dashboard"
      }
  }
  
  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <LogUp/>
      <h1>Login Form</h1><br/>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text"   {...register("email",{ required: true })} placeholder="Enter Email" /><br/><br/>
      { errors.email && <p style={{color:"red"}}>Email is required</p>}
      {/* include validation with required or other standard HTML validation rules */}
      <input type="password"  {...register("password", { required: true })} placeholder="Password"/><br/><br/>
      { errors.password && <p style={{color:"red"}}>Password is required</p>}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>}<br/><br/> */}
      <input type="submit"  />
        <ToastContainer />
    </form>
    </div>
  )
}
