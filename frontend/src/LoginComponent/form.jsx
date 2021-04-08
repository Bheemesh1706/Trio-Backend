import React from "react";

function Form ({page})
{
     
    function handleLogin(e)
    {
        e.preventDefault()
        console.log('login')
    }

    function handleRegister(e)
    {
        e.preventDefault()
        console.log('Register')
    }


    return(<div className="right">
        <form onSubmit={page==='Register'? handleRegister:handleLogin}>
            <label>{page=='Register'?'Signup':'Login'}</label>
            {page==='Register'&&<input type='email' id='email' placeholder="Email"/>}
            <input type="text" id="uname" placeholder="UserName"/>
            <input type="password" id="password" placeholder="Password" />
            <button type='submit'>{page}</button>
        </form>
    </div>
    );
}

export {Form};