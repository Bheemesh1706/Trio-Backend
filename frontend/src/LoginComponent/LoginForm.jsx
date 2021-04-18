import React,{useEffect}from "react";
import {sendDataLogin} from '../BackendServices/services';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../LoginComponent/Schema"


function LoginForm ()
{
   
   const  {register,handleSubmit,reset,formState: { errors } } = useForm({
       resolver: yupResolver(loginSchema)
   })
   
   useEffect(()=>{console.log('reset')
       reset()},[])


   const handleLogin  = (e) =>
    {
     
       console.log(e)
       console.log('Login')   

       sendDataLogin(e)
     
    }
    
    return(<div className="right">
        <form onSubmit={handleSubmit(handleLogin)}>
            <label>Login</label>
            <input type="text" id="uname" placeholder="UserName" name='Username' {...register('Username')}/>
            <p className="error2">{errors.Username?.message}</p>  
            <input type="password" id="password" placeholder="Password" name='Password' {...register('Password')}/>
             <p className="error3">{errors.Password?.message}</p>   
             <p id = "error"></p>
            <button type='submit'>Login</button>
        </form>
    </div>
    );
}

export {LoginForm};