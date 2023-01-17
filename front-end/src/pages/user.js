import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    const [data , setData] = useEffect([])
    useEffect(() => {
        axios.get( 'http://localhost:8000' + '/UserPosts' , {userName: localStorage.getItem("name")})
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((er) => {
            console.log(er)
        })
    },[])
    return(
        <div>

        </div>
    )
}
export default User
