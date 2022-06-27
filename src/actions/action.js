
import React from 'react'
import axios from 'axios';
import instance from '../components/baseURL';
import { notify } from '../components/login';
import { logupnotify } from '../components/logup';

export const Register = (data) => {
  console.log(5656,data)
  return (dispatch) => {
  const body = {
      "user":{
          "email":data.email,
          "password":data.password,
          "password_confirmation":data.cpassword
      }
  }
  instance.post(`/signup`,body)
      .then(res => {
          console.log(res.data)
          logupnotify(" registration is successfully");
        // localStorage.setItem('user-info', JSON.stringify(res.data));
        dispatch({
            type : "GET_LOGUP",
            payload : res.data
        });
      }).catch((a)=>{
        logupnotify(a.message);
      })
     
  }
}

   export const getLogin = (data) => {
    console.log(5656,data)
    return (dispatch) => {
    const body = {
        "user":{
            "email":data.email,
            "password":data.password
        }
    }
    instance.post(`/signin`,body)
    
    
        .then(res => {
            notify("Login successfully");
            console.log(res.data)
          localStorage.setItem('user-info', JSON.stringify(res.data));
          localStorage.setItem('token',res.data.token);
        //   localStorage.setItem('user_id', res.data.user.id)
          console.log("user_id")
          dispatch({
              type : "GET_LOGIN",
              payload : res.data
          });
        }).catch((error)=>{
            notify(error.message,error);
        })
       
    };
  };
  

  export const GetData = () => {
      const token = localStorage.getItem('token');
      console.log(token);
   return (dispatch)=>{
        instance.request({
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: "/posts"
    }).then(res => 
       {
        console.log(6776,res.data)

            dispatch ({
                type:'GET_DATA',
                payload:res.data
            })
        })
    }
    };


    export const Cpost = (data) => {
        const token = localStorage.getItem('token');
        console.log(token);
        const userid = localStorage.getItem("user_id")
        const body = {
            "post": 
            {
                "title": data.title,
                "description": data.description,
                "user_id": userid
            }
        }
     return (dispatch)=>{
        instance.request({
          method: "post",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          },
          url: "/posts",
          data : body
          

      }).then(res => 
         {
          console.log(6776,res.data)
          })
      }
      };

     export const Deletedata=()=>{
         return(
             {
                 type:'DELETE',
             }
         )
     }
     export const Spost = (id) => {
        const token = localStorage.getItem('token');
        console.log(token);
            return (dispatch)=>{
                instance.request({
           method: "get",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
      },
      url: `/posts/${id}`,
       }).then(res =>{
          console.log(6776,res.data)
          dispatch ({
            type:"SPOST",
            payload:res.data
        })
          })
      }
      };

    export const Dpost = (id) => {
          console.log(5665,id)
        const token = localStorage.getItem('token');
        console.log(token);
            return (dispatch)=>{
                instance.request({
           method: "delete",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
      },
      url: `/posts/${id}`,
       }).then(res =>{
          console.log(6776,res.data)
          dispatch({
              type:"DEL",
              payload:res.data
          })
          })
      }
      };

      export const update_post = (id,data) => {
        const token = localStorage.getItem('token');
        console.log(token);
       
        const userid = localStorage.getItem("user_id")
        const body = {
            "post": 
            {
                "title": data.title,
                "description": data.description,
                "user_id": userid
            }
        }
        return (dispatch)=>{
            axios.request({
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            url: `/posts/${id}`,
            data : body
            
  
        }).then(res => 
           {
            console.log(6776,res.data)
            dispatch({
                type:"UPT_POST",
                payload:res.data
            })
    
            })

        }
        };