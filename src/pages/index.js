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
                <div class="mb-3">
                    <label for="title" class="form-label">Website name</label>
                    <input type="input" class="form-control" name="title" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Website URL</label>
                    <input type="text" class="form-control" name="url" placeholder="http://   " />
                </div>
                <button type="submit" class="btn btn-primary"> Create Bookmark </button>
            </Form>

            <br>
        
            </br>

           
            <div className='container'>
            <h2>BookMarks</h2>
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