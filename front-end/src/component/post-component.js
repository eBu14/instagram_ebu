import React from 'react';
import { AiOutlineHeart ,AiOutlineMessage} from "react-icons/ai";
export const PostComponent = (props) => {
    const { imageFile, userName , description, id} = props
    return (    
        <div className='border border-slate-200 w-[32rem] rounded my-4 flex flex-col bg-white'>
            <div className='flex h-12 border-slate-200 items-center'>
                <img className='h-8 w-8 rounded-full ml-4' src='https://i.pinimg.com/564x/c8/30/2d/c8302d3284e089cff1d99d41c60a6399.jpg'/>
                 <div className='ml-2' >{userName}</div>
            </div>
            <div className='w-[32rem]'><img className='bg-contain bg-center' src={`data:image/jpeg;base64,${imageFile}`}/></div>
            <div className='h-7 border-slate-200 flex mt-2 ml-3'>
                <div className='text-2xl'><AiOutlineHeart/></div>
                <div className='text-2xl'><AiOutlineMessage/></div>
            </div>
            <div className='h-7 font-bold ml-3'>12 likes</div>
            <div className='flex font-bold h-8 ml-3'>{userName}
              <div className='font-light ml-2'>{description}</div>    
            </div>
        </div>
    )
}