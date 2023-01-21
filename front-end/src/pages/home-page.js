import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostComponent } from '../component/post-component';
import axios from 'axios';
import { AiFillMessage , AiFillHome ,AiFillPlusSquare , AiOutlineHeart ,AiOutlineSearch} from "react-icons/ai";
export const HomePage = () => {
    const [data , setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000' + '/posts' , {userName : localStorage.getItem("name")})
        .then((res) => {
            console.log(res.data)
            setData(res.data.data)
        })
        .catch((er) => {
            console.log(er)
        })
    },[])
    return (
        <div className=' flex flex-col align-center bg-slate-100 items-center'>
            <div className='h-[3rem] w-screen flex flex-row bg-white border-b-2 border-bg-zinc-800 justify-center fixed'>
                <div className='w-8/12 flex flex-row justify-between items-center'>
                    <div className='text-xl'>Instagram</div>
                    <input className='bg-slate-200 h-7 outline-0 rounded' type='text' placeholder="Search here" />
                    <div className='flex w-3/12 justify-between'> 
                        <div className='text-3xl'><AiFillHome/></div>
                        <div className='text-3xl'><AiFillMessage/></div>
                        <Link className='text-3xl' to="/post"><AiFillPlusSquare/></Link>
                        <div className='text-3xl'><AiOutlineHeart/></div>
                        <Link to='/userPosts'><div>{localStorage.getItem("name")}</div></Link>
                    </div>

                </div>
            </div>
            
        <div className='mt-[3rem]'>
        {data.map((e ,index)=> {
            return(
                <PostComponent key={index} imageFile={e.imageFile} userName={e.userName} description={e.description} id={e._id}/>
            )
        })}
        </div>
        </div>
    )
}