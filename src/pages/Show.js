import { useLoaderData, Form, Link} from "react-router-dom";


function Show(props) {
    const bookmark =useLoaderData();

    return(
        <div className="website">
        
        <h1>Bookmark Details</h1>
        <h2>Title: {bookmark.title}</h2>
        <h2>Url: <a href= {bookmark.url}>{bookmark.url}</a></h2>

        <h2>Update {bookmark.title}</h2>
            <Form action={`/update/${bookmark._id}`} method="put">
                <input defaultValue={bookmark.title} type="input" name="title"/>
                <input defaultValue={bookmark.url} type="input" name="url"/>
                <input type="submit" value= "Update" />
            </Form>

            <h2>Delete Bookmark</h2>
            <Form action={`/delete/${bookmark._id}`} method="post">
                <input type="submit" value={`delete ${bookmark.title}`}/>
            </Form>
            <br></br>
            <button>
                <Link to="/">Home</Link>
            </button>
    </div>
    )
}

export default Show