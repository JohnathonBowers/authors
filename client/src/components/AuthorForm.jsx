import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    
    const { initialAuthorData, onSubmitProp } = props
    
    const [author, setAuthor] = useState(initialAuthorData)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        onSubmitProp(author)
    }

    const handleChange = e => {
        setAuthor({...author, [e.target.name]: e.target.value})
    }

    const handleCancelButton = e => {
        navigate("/")
    }

    return (
        <div className="border border-dark">
            <form className="m-4" onSubmit={handleSubmit}>
                <label htmlFor="authorName" className="form-label mb-2">Name:</label>
                <input type="text" name="authorName" className="form-control mb-4" value={author.authorName} onChange={handleChange} />
                <div className="d-flex flex-row justify-content-center">
                    <button className="me-4 btn btn-danger" onClick={handleCancelButton}>Cancel</button>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AuthorForm 