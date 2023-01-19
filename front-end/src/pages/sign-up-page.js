import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
    const [ userName , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [error , setError ] = useState("")

    function signup() {
        axios
        .post('http://localhost:8000'+ "/signup", {
           userName : userName,
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

    return( 
        <div className='h-screen w-screen bg-slate-100 flex flex-col justify-center items-center'>
        <div className='h-[18rem] w-[22rem] bg-white flex justify-around flex-col items-center relative '>
            <div className='font-semibold text-2xl'>instagram</div>
            <input value={userName} onChange={(e) => {setUsername(e.target.value)}} className='w-[17rem] h-[2rem] rounded border-solid border-2 border-slate-500 outline-none' placeholder='Username'/>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className='w-[17rem] h-[2rem] rounded border-solid border-2 border-slate-500 outline-none' placeholder='Password'/>
            <button onClick={() => {signup()}} className='bg-sky-600 w-[17rem] h-[3rem] rounded text-white text-base'>Sign up</button>
        </div>
        <div className='h-[4rem] w-[22rem] mt-2 flex bg-white justify-center items-center'> Do you have an account? <Link to='/signin'>  Sign in</Link></div>
    </div>
    )
}