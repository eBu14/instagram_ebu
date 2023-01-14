import React from 'react';

export const PostComponent = (props) => {
    const { imageFile, userName , description, id} = props
    return (    
        <div className='border border-slate-400'>
            <div>{userName}</div>
            <div><img src={`data:image/jpeg;base64,${imageFile}`}/></div>
            <div>{description}</div>
        </div>
    )
}