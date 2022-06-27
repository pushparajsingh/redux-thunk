
import React from 'react'

const initialstate = {
    users:[],
    single:[],
    deleteData:[],
    updtPost:[]
}
export default function userReducer(state = initialstate,action) {
    console.log(56,action)
     switch(action.type)
     {
        
        case "GET_LOGIN":
             return {
                 ...state,
                users : action.payload
                 }
        case "GET_LOGUP":
            return {
                ...state,
               users : action.payload
                   }         
        
        case "GET_DATA":
        return {
            ...state,
             users: action.payload
        }
        case "DELETE":
        return(
            {
              users:null,  
            }
        )
        case "SPOST":
            console.log(3333,action.payload);
           return ({
              single:action.payload

            })
            
        case "DEL":
               return ({
                  deleteData:action.payload
                })

        case "UPT_POST":
        return ({
            updtPost :action.payload
        })
        default:
            return state;
             }
}

