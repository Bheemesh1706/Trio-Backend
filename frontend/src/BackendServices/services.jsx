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

  export {sendData}