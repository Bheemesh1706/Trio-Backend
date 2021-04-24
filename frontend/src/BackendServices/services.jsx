import axi from 'axios'
import{API_HOST} from '../Components/config'
 
 


 const sendDataRegister = async(data)=> {
            
            try{ 
                    console.log("register_axiso")
                         console.log(data)
                           const response = await axi.post(`${API_HOST}/users`, {
                                username: data.Username,
                                email: data.Email,
                                password: data.Password,
                            })
                            console.log(data)
                }
            catch(error){console.log(error) } 
  }

  const sendDataLogin = async(data)=>
  {
      try{  
             
                     console.log('login_axios')
                    const response = await axi.post(`${API_HOST}/login`, {
                                username: data.Username,
                                password: data.Password,
                            })
                  return response.data.success_message
                
                }
                
            catch(error)
            {
                console.log(error.response.data.error_message) 
                document.getElementById('error').innerText = error.response.data.error_message
            } 
  }

  const handleLogout = async(setRedirect) =>
  {
      const response = await axi.get(`${API_HOST}/logout`)
      localStorage.clear();
      setRedirect('/login')
      window.location.reload();
      
  }



  export {sendDataLogin,sendDataRegister,handleLogout}