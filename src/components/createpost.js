import React from "react";
import { useForm } from "react-hook-form";
import Links from "./link/links4";
import { useDispatch } from "react-redux";
import  { Cpost }  from '../actions/action'

export default function CreatePost() {
    
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    dispatch(Cpost(data));
    }

    return (
        <>
            <Links />
            <h1>Create Post</h1><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("title")} placeholder="Enter Title" /><br /><br />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("description", { required: true })} placeholder="Enter Discription" /><br /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
             
                <input type="submit"  />
            </form>
        </>
    );
}