import axios from "axios";
import React, { useState } from "react";

const PostPage = () => {
    const [description, setDecription] = useState("")
    const [imageFile, setFile] = useState("")

    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64image = reader.result.split(',')[1];
            console.log('RESULT', reader.result)
            setFile(base64image)
            // console.log(base64image + "he")
        }
        reader.readAsDataURL(file);
    }

    function post() {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        axios
            .post('http://localhost:8000' + '/posts', {
                description: description,
                imageFile: imageFile,
                userName: localStorage.getItem("name")

            }, config)
            .then((res) => {
                console.log(res.data)
            })
            .catch((er) => {
                console.log(er.message)
            })
    }
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-[30rem] h-[30rem] justify-around border border-sky-500 px-6 ">
                <input value={description} onChange={(e) => { setDecription(e.target.value) }} className="h-[2rem] w-full outline-none border border-slate-500 rounded" placeholder="Description" />
                {/* <input value={image} className="h-[10rem] w-full border border-slate-500" type='file' multiple accept="image/*" onChange={(e) => {setImage(e.target.files[0])}}/> */}
                <input type='file' onChange={(e) => { encodeImageFileAsURL(e.target) }} />
                <button className="h-[2rem] w-full text-white bg-sky-500 rounded" onClick={() => post()}>Post</button>
            </div>
        </div>
    )
}
export default PostPage
