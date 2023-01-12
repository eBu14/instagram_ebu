import React, { useEffect } from 'react';
import { PostComponent } from '../component/post-component';
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) navigate('/sign-in')

        // axios.get("/kdopsak", { token: token })
    }, []);

    return (
        <div>
            Home
            <PostComponent />
        </div>
    )
}