import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { update_post } from '../actions/action';
import Link from './link/links6';
export const UpdatePost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(5657,id)
    // const oldData = useSelector(state=>state.userReducer.updtPost);
    // console.log(88888,oldData)
    const onSubmit=(data)=>{
     dispatch(update_post(id,data))
     navigate("/dashboard")
  }

  return (
    <div>
        <Link/>
         <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("title")} placeholder="Enter Title" /><br /><br />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("description", { required: true })} placeholder="Enter Discription" /><br /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit"  />
            </form>
    </div>
  )
}
