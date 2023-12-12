import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Todos = () => {


    const [Todos, setPosts] = useState([])
    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/todos",
            method: 'get'
        }).then((res) => {
            setPosts(res.data)
        })
    }, [])
    return (
          <>
          <h1 className='text-center'>Todos</h1>
            {
                Todos.map(item => 
                        <div className="d-flex align-items-center border m-1 p-1">
                            <input type="checkbox" checked={item.completed} />
                            <p className='m-0 mx-2'>{item.id}. {item.title}</p>
                        </div>
               )
            }
            </>
    )
}
export default Todos