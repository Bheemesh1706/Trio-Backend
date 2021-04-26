import {useEffect,useState} from 'react'
import { getMessages } from '../BackendServices/services';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {getUserid,sendMessage} from '../BackendServices/services'
import {createConsumer} from '@rails/actioncable'

export default function Chat({usernameProps}) {

    const URL = 'ws://localhost:3001/cable'
    const consumer = createConsumer(URL)

    const messageschema = yup.object().shape({body: yup.string().required(),
    user_id: yup.string().required(),
    timestamps: yup.string()})

    const  {register,handleSubmit,reset,formState: { errors } } = useForm({ resolver: yupResolver(messageschema) })
    const [username] = usernameProps
    const [messages,setMessages] = useState([])
    const [message,setMessage] = useState('')
    const [id,setId] = useState(null)

    useEffect(()=>{
        reset()
        addSubscribers()
        getMessages().then((e)=>{setMessages(e) 
        console.log(e)})
        getUserid(username).then((e)=>{setId(e)
        console.log(e)} )
       },[])

      

    function handleMessage(e){
        console.log(e)
        sendMessage(e)
   
    }

    function addSubscribers() {
        consumer.subscriptions.create(
            {
                channel: 'ChatroomChannel',
                username: username,
            },
            {
                connected: () => console.log('connected'),
                disconnected: () => console.log('disconnected'),
                received: data => console.log(data),

            }
        )
    }

    // function removeSubscriber()
    // {
    //     consumer.disconnect()
    // }

    return(
    <div className="right">
        <div className="chat">
        <h1 >ChatRoom</h1>
        </div>

        <div className="chatbox">

                {/* {message.map(d => (<p className="text" key={d.id}>{d.body}</p>))} */}
             

            <form className="formMessage"  onSubmit= {handleSubmit(handleMessage)} >
             <input type="text"  placeholder="Text" name='body'  {...register('body')}/>
             <input type="hidden" name="user_id" value={id} {...register('user_id')}></input>
             <button type="submit" className ="enter">Enter</button>
            </form>
        </div>
    </div>
    );
} 