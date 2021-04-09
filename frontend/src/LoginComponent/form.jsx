import React,{useState}from "react";
import {sendData} from '../BackendServices/services'

function Form ({page})
{
    const  [formdata,setValue] = useState({});

    function handleLogin(e)
    {
       e.preventDefault()
        console.log('login')
        sendData(formdata)
    }

    function handleRegister(e)
    {
       e.preventDefault()
        console.log('Register')
        sendData(formdata)
    }


    return(<div className="right">
        <form onSubmit={page==='Register'? handleRegister:handleLogin}>
            <label>{page=='Register'?'Signup':'Login'}</label>
            {page==='Register'&&<input type='email' id='email' placeholder="Email" name='Email'
                                value = {formdata.Email}
                                onChange={event => setValue(d =>({...d,email: event.target.value}))}/>}

            <input type="text" id="uname" placeholder="UserName" name='Username'
                                value = {formdata.Username}
                                onChange={event => setValue(d =>({...d,username: event.target.value}))} />

            <input type="password" id="password" placeholder="Password" name='Password'
                                value = {formdata.Password}
                                onChange={event => setValue(d =>({...d,password: event.target.value}))}/>
            <button type='submit'>{page}</button>
        </form>
    </div>
    );
}

export {Form};