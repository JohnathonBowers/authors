import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthorForm from './AuthorForm'

const AuthorCreate = () => {
    
    const initialAuthorData = {
        authorName: ""
    }
    
    const [errors, setErrors] = useState()

    const navigate = useNavigate()

    const createAuthor = authorParam => {
        axios.post("http://localhost:8000/api/authors", authorParam)
            .then(res => {
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }
    
    return (
        <div className="container col-sm-6 mt-4 pt-4">
            <h1 className="mb-4">Favorite Authors</h1>
            <Link to="/" className="my-4">Home</Link>
            <p className="my-4">Add a new author:</p>
            <AuthorForm initialAuthorData={initialAuthorData} onSubmitProp={createAuthor} errors={errors} />
        </div>
    )
}

export default AuthorCreate