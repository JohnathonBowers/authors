import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AuthorForm from './AuthorForm'

const AuthorUpdate = () => {
    
    const {id} = useParams()

    const [author, setAuthor] = useState({})

    const [errors, setErrors] = useState()

    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])
    
    const updateAuthor = personParam => {
        axios.put("http://localhost:8000/api/authors/" + id, personParam)
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
            <p className="my-4">Edit this author:</p>
            {
                loaded && <AuthorForm initialAuthorData={author} onSubmitProp={updateAuthor} errors={errors} />
            }
        </div>
    )
}

export default AuthorUpdate