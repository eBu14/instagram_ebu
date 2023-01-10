import React from 'react';
import { Link } from 'react-router-dom';
import { PostComponent } from '../component/post-component';

export const HomePage = () => {
    return (
        <div>
            <div className='h-8 w-screen bg-slate-300 flex flex-row'>
                <Link to="/post"> create post</Link>
                <div>{localStorage.getItem("uid")}</div>
            </div>
            <PostComponent />
        </div>
    )
}