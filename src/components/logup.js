import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux';
import { Register } from '../actions/action';
import Link from './link/links3'
import { ToastContainer, toast } from 'react-toastify';
export const logupnotify = (a) => toast(a);

export default function Logout() {
  
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
   dispatch(Register(data));
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <Link/>
       <h1>Register Form</h1><br/>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("email",{ required: true })} placeholder="Enter Email"/><br/><br/>
      { errors.email && <p style={{color:"red"}}>Email is required</p>}
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} placeholder="Password"/>
      { errors.password && <p style={{color:"red"}}>Password is required</p>}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}<br/><br/>
      
      <input {...register("cpassword", { required: true })} placeholder="confirm Password"/>
      { errors.cpassword && <p style={{color:"red"}}>Password is required</p>}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}<br/><br/>
      <input type="submit" />
      <ToastContainer />
    </form>
    </div>
  )
}
