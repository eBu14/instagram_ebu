import axios from "axios";
import React, { useState } from "react";

const PostPage = () => {
    const [description , setDecription] = useState("")
    const [image , setImage] = useState([])
    const [error , setError] = useState("")
    function post() {   
        axios
         .post('' + "post" , {
            description : description,
            image : image
         })
         .then((res) => {
            console.log(res.date)
         })
         .catch((er) => {
            setError(er.message);
            console.log(er.message  )
         })
    }
    return(
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-[30rem] h-[30rem] justify-around border border-sky-500 px-6 ">
                <input value={description} onChange={(e) => {setDecription(e.target.value)}} className="h-[2rem] w-full outline-none border border-slate-500 rounded" placeholder="Description"/>
                <input value={image} className="h-[10rem] w-full border border-slate-500" type='file' multiple accept="image/*" onChange={(e) => {setImage(e.target.value)}}/>
                <button className="h-[2rem] w-full text-white bg-sky-500 rounded" onClick={() => post()}>Post</button>
            </div>
        </div>
    )
}
export default PostPage
