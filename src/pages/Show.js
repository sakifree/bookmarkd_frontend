import { useLoaderData, Form} from "react-router-dom";


function Show(props) {
    const bookmark =useLoaderData();

    return(

        <div className="website">
        
        <h1>Bookmark Details</h1>

        <h2>Title: {bookmark.title}</h2>
        <h2>Url: <a href= {bookmark.url}>{bookmark.url}</a></h2>

        <br></br>

        <div class="container">
        <h2>Update {bookmark.title}</h2>

            <Form action={`/update/${bookmark._id}`} method="put">

                <div class="mb-3">
                    <label for="title" class="form-label">Update Website name</label>
                    <input defaultValue={bookmark.title} type="input" class="form-control" name="title"/>
                </div>
                
                <div class="mb-3">
                    <label for="url" class="form-label">Update Website url</label>
                    <input defaultValue={bookmark.url} type="input" class="form-control" name="url"/>
                </div>
                


                <input type="submit" value= "Update" />


            </Form>
        </div>

        <br></br>

        <div class="container">
    
            <Form action={`/delete/${bookmark._id}`} method="post">
                <button type="submit" class="btn btn-danger">delete {bookmark.title} </button>
            </Form>
        </div>
    </div>
    )
}

export default Show