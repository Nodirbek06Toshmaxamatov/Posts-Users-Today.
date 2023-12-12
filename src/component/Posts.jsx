import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Posts = () => {


    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: 'get'
        }).then((res) => {
            console.log(res.data);
            setPosts(res.data)
        })
    }, [])
    return (
          <>
          <h1 className='text-center'>Posts</h1>
            {
                posts.map(item => <div className='col-4'>
                    <div className="card my-2">
                        <div className="card-header">
                            <p>{item.id}.{item.title}</p>
                        </div>
                        <div className="card-body">
                            {item.body}
                        </div>
                    </div>
                </div>)
            }
            </>
    )
}

export default Posts