import axios from 'axios';
import React, { useState } from 'react';


export const SignInPage = () => {

    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ error , setError] = useState("")
    function login() {
        axios
         .post(''+ "/signIn", {
            password : password
         })
         .then((res) => {
            console.log(res.data)
         })
         .catch((er) => {
            setError(er.message);
            console.log(er.message)
         })
    }

    return (
        <div className='h-screen w-screen bg-slate-100 flex flex-col justify-center items-center'>
            <div className='h-[18rem] w-[22rem] bg-white flex justify-around flex-col items-center relative '>
                <div className='font-semibold text-2xl'>instagram</div>
                <input value={username} onChange={(e) => {setUsername(e.target.value)}} className='w-[17rem] h-[2rem] rounded border-solid border-2 border-slate-500 outline-none' placeholder='Username'/>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} className='w-[17rem] h-[2rem] rounded border-solid border-2 border-slate-500 outline-none' placeholder='Password'/>
                <button onClick={() => {login()}} className='bg-sky-600 w-[17rem] h-[3rem] rounded text-white text-base'>Log in</button>
            </div>
            <div className='h-[4rem] w-[22rem] mt-2 flex bg-white justify-center items-center'> Don't have an account? <a>Sign up</a></div>
        </div>
    )
}
