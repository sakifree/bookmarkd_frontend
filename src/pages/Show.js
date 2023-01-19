import { useLoaderData, Form} from "react-router-dom";


function Show(props) {
    const website =useLoaderData();

    return(
        <div className="website">
        <h1>{webiste.name}</h1>
        <h2>{website.title}</h2>
        
    </div>
    )
}