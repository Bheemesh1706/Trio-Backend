import axi from 'axios'
import{API_HOST} from '../Components/config'
 
 


 const sendData = async(data)=> {
            try{
                const response = await axi.post(`${API_HOST}/users`, {
                        username: data.username,
                        email: data.email,
                        password: data.password,
                    })
                    console.log(data)
                }
            catch(error){console.log(error) } 
  }

  const dataValidation = (data)=> {
                try
                {
                   const regex_name= /^[a-zA-Z0-9_.]{8,15}$/ 
                   const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                   const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
                   var error_message=[]
                            
                            if (!regex_name.test(data.username))
                            {
                                 error_message.push({error: "Username not matched with rules",field: 'Username' })
                               
                            }
                            if (!regex_password.test(data.password))
                            {
                                error_message.push({error: "Password not matched with rules",field: 'Password' })
                            }
                            if(!regex_email.test(data.email))
                            {
                                error_message.push({error: "Email not matched with rules",field: 'Email' })
                            }
                           
                            return error_message;
                                  
                }
                catch(error)
                {
                        console.log(error)
                }
  }

  export {sendData,dataValidation}