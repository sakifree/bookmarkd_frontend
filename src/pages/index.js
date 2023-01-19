import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const bookMark = useLoaderData();
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
                {bookMark.map((bookMark) => (
                    <div className="card" key={bookMark._id}>
                        <Link to={`/${bookMark._id}`} className="bookMark">
                            <h1>{bookMark.name}</h1>
                        </Link>
                        
                        <h3>{bookMark.title}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Index;