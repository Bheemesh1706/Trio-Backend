import {useEffect,useState} from 'react'
import { getMessages } from '../BackendServices/services';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {getUserid} from '../BackendServices/services'

export default function Chat({usernameProps}) {

    const messageschema = yup.object().shape({body: yup.string().required(),
    user_id: yup.string().required(),
    timestamps: yup.string().required()})

    const  {register,handleSubmit,reset,formState: { errors } } = useForm({ resolver: yupResolver(messageschema) })
    const [username] = usernameProps
    const [message,setMessage] = useState([])
    const [id,setId] = useState(null)
    const [time,setTime] = useState(null)

    useEffect(()=>{
        getMessages().then((e)=>{ setMessage(e) })
        getUserid(username).then((e)=>{setId(e)} )
        setTime(Date().toLocaleString())
        reset()
    },[])

    function handleMessage(e){
        console.log(e)
   
    }

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
             <input type="hidden" name="timestamps" value={time} {...register('timestamps')}></input>
             <button type="submit" className ="enter">Enter</button>
            </form>
        </div>
    </div>
    );
} 