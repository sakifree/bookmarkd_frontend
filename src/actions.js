import {redirect} from "react-router-dom"

const URL = "https://bookmarkd-backend-dev.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    const newBookMark = {
        title: formData.get("title"),
        url: formData.get("url"),
    };

    await fetch(URL + "/bookmark", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookMark),
    });

    return redirect("/");
};

export const updateAction = async({request, params}) =>{ 
   
    console.log("hello from update action")
    console.log(request)
    console.log(params.id)

    // get data from form
    const formData = await request.formData()

    const updatedBookmark = {
        title: formData.get("title"),
        url: formData.get("url")
    }
    console.log("Updated bookmark is "+updatedBookmark.title+updatedBookmark.url)

    await fetch(URL+"/bookmark/"+params.id, {
        method: "put",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(updatedBookmark)
    })
    
    return redirect("/")

}

export const deleteAction = async ({params}) =>{
    await fetch(URL+'/bookmark/'+params.id, {
        method: "delete"
    })
    return redirect("/")

}