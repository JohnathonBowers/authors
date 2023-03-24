import React from 'react'
import axios from 'axios'

const AuthorDeleteButton = (props) => {
    
    const { authorId, successCallback } = props

    const handleDeleteButton = e => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
            .then(res => successCallback())
            .catch(err => console.log(err))
    }
    
    return (
        <button className="btn btn-danger ms-2" onClick={handleDeleteButton}>Delete</button>
    )
}

export default AuthorDeleteButton