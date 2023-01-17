import React from 'react';

export const PostComponent = (props) => {
    const { imageFile, userName , description, id} = props
    return (    
        <div className='border border-slate-200 w-[32rem] rounded my-4 flex flex-col '>
            <div className='flex h-12 border-b-2 border-slate-200 ml-2'>
                <img className='h-10 w-10 rounded-full' src='https://i.pinimg.com/564x/c8/30/2d/c8302d3284e089cff1d99d41c60a6399.jpg'/>
                 <div >{userName}</div>
            </div>
            <div><img src={`data:image/jpeg;base64,${imageFile}`}/></div>
            <div className='h-10 border-y-2 border-slate-200 flex'>
                <div>l</div>
                <div>C</div>
            </div>
            <div className='h-8 font-bold'>12 likes</div>
            <div className='flex font-bold'>{userName}
              <div className='font-light ml-2'>{description}</div>    
            </div>
        </div>
    )
}