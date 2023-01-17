import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostComponent } from '../component/post-component';
import axios from 'axios';
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
        <div className='h-screen w-screen flex flex-col align-center'>
            <div className='h-8 w-screen bg-slate-300 flex flex-row'>
                <Link to="/post"> create post</Link>
                
           
                <Link to='/userPosts'><div>{localStorage.getItem("name")}</div></Link>
            </div>
            
        <div>
        {data.map((e)=> {
            return(
                <PostComponent imageFile={e.imageFile} userName={e.userName} description={e.description} id={e._id}/>
            )
        })}
        </div>
        </div>
    )
}