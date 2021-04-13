import React,{useEffect}from "react";
import {sendData} from '../BackendServices/services';
import {useLocation} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema =yup.object().shape({
    Email: yup.string().email().required(),
    Username: yup.string().min(8).max(15).matches(/^[a-zA-Z0-9_]+$/,'Valid Inputs are charecter number and ("_")').required(),
    Password: yup.string().min(6).max(15).required()
})

function Form ({page})
{
   
   const  {register,handleSubmit,formState: { errors } } = useForm({
       resolver: yupResolver(schema)
   })
   
    let location = useLocation();
    
    useEffect(() => {}, [location]);

    function handleLogin(e)
    {console.log('login')
        //sendData(formdata)
    }

    function handleRegister(e)
    {
     window.location.replace('/');
       console.log(e)
       console.log('register')         
    }


    return(<div className="right">
        <form onSubmit={ handleSubmit(page==='Register'? handleRegister:handleLogin)}>
            <label>{page=='Register'?'Signup':'Login'}</label>
            {page==='Register'&&<input type='email' id='email' placeholder="Email" name='Email' {...register('Email')}/>}
            {page=='Register'&&<p className="error1">{errors.Email?.message}</p>}
            
            <input type="text" id="uname" placeholder="UserName" name='Username' {...register('Username')}/>
            <p className="error2">{errors.Username?.message}</p>  
            
            <input type="password" id="password" placeholder="Password" name='Password' {...register('Password')}/>
             <p className="error3">{errors.Password?.message}</p>   
            <button type='submit'>{page}</button>
        </form>
    </div>
    );
}

export {Form};