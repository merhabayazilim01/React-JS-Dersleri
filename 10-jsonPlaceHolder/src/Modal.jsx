import axios from 'axios';
import React, { useEffect } from 'react'

export default function Modal({ setOpen, open, postId }) {

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [postId])

    if (!open) {
        return null;
    }

    return (
        <div className='fixed z-20 top-0 left-0'>


        </div>
    )
}
