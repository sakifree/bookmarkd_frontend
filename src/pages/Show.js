import { useLoaderData, Form} from "react-router-dom";


function Show(props) {
    const website =useLoaderData();

    return(
        <div className="website">
        <h1>{website.title}</h1>
        <h2>{website.url}</h2>
        
    </div>
    )
}

export default Show