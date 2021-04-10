import React,{useState}from "react";
import {sendData,dataValidation} from '../BackendServices/services'

function Form ({page})
{
    const  [formdata,setValue] = useState({});
    const  [errordata,setErrorData] = useState({});

    function handleLogin(e)
    {
       e.preventDefault()
        console.log('login')
        sendData(formdata)
    }

    function handleRegister(e)
    {
       e.preventDefault()

       const  error_message  = dataValidation(formdata)
      
       if  (error_message.length === 0)
         {
             
            //  sendData(formdata)
            console.log('Success')
         }
        else
        {       console.log(error_message)
                error_message.map( (e)=> { setErrorData({...errordata, [e.field]: e.error}) } )
                // error_message.map( (a) => { console.log(a.field)}) 
        }

                
    }


    return(<div className="right">
        <form onSubmit={page==='Register'? handleRegister:handleLogin}>
            <label>{page=='Register'?'Signup':'Login'}</label>
            {page==='Register'&&<input type='email' id='email' placeholder="Email" name='Email'
                                value = {formdata.Email}
                                onChange={event => setValue(d =>({...d,email: event.target.value}))}/>}
                <div className="error">{errordata.Email}</div>
            <input type="text" id="uname" placeholder="UserName" name='Username'
                                value = {formdata.Username}
                                onChange={event => setValue(d =>({...d,username: event.target.value}))} />
                <div className="error">{errordata.Username}</div>
            <input type="password" id="password" placeholder="Password" name='Password'
                                value = {formdata.Password}
                                onChange={event => setValue(d =>({...d,password: event.target.value}))}/>
                <div className="error">{errordata.Password}</div>
            <button type='submit'>{page}</button>
        </form>
    </div>
    );
}

export {Form};