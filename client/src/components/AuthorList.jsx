import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = () => {
    
    const [authors, setAuthors] = useState([]);

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
            <table className="table table-striped table-hover table-bordered">
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
                                    <td>Edit Delete</td>
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