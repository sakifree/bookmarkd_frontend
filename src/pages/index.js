import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const website = useLoaderData();
    return (
        <div>
            <h2>Add a New BookMark</h2>
            <Form
                action="/create"
                method="post"
            >
        <input type="input" name="name" placeholder="website name" />
        <input type="text" name="website" placeholder="http://" />
            </Form>

        </div>
    );
}

export default Index;