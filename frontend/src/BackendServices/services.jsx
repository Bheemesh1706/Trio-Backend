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
             console.log(data)
                     console.log('login_axios')
                    const response = await axi.post(`${API_HOST}/login`, {
                                username: data.Username,
                                password: data.Password,
                            })
                            console.log()
                }
                
            catch(error){console.log(error) } 
  }

// const getData = async(data)=> {
            
//             try{console.log("get_axiso")
//                          console.log(data)
//                            const response = await axi.post(`${API_HOST}/login`)
                            
//                 }
//             catch(error){console.log(error) } 
//   }


  export {sendDataLogin,sendDataRegister}