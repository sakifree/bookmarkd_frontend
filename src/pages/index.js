import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const people = useLoaderData();
    return (
        <div>
            <h2>Add a New BookMark</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="website Name" placeholder="website" />
                <input
                    type="text"
                    name="website"
                    placeholder="http://           "
                />
            </Form>

        </div>
    );
}

export default Index;