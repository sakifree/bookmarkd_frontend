import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const bookMarks = useLoaderData();
    return (
        <div>
            <h2>Add a New BookMark</h2>
            <Form
                action="/create"
                method="post"
            >
    <input type="input" name="title" placeholder="website name" />
        <input type="text" name="url" placeholder="http://   " />
        <input type="submit" value="Add Bookmark" />
            </Form>

            <h2>Book Marks</h2>
            <div className='container'>
                {bookMarks.map((bookMark) => (
                    <div className="card" key={bookMark._id}>
                        <Link to={`/${bookMark._id}`}>
                            <h1>{bookMark.title}</h1>
                        </Link>
                    
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Index;