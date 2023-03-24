import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorList = () => {
    
    const [authors, setAuthors] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container col-sm-6 mt-4 pt-4">
            <h1 className="mb-4">Favorite Authors</h1>
            <Link to="/new" className="my-4">Add an author</Link>
            <p className="my-4">We have quotes by:</p>
            <table className="table table-striped table-hover table-bordered align-middle">
                <thead>
                    <tr>
                        <th className="p-2">Author</th>
                        <th className="p-2">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.authorName}</td>
                                    {/* Add edit and delete buttons */}
                                    <td>
                                        <button className="btn btn-warning me-2" onClick={e => navigate(`/edit/${author._id}`)}>Edit</button> 
                                        Delete
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList