import {redirect} from "react-router-dom"

const URL = "https://bookmarkd-backend-dev.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    const newBookMark = {
        title: formData.get("title"),
        url: formData.get("url"),
    };

    await fetch(URL + "/bookMark", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookMark),
    });

    return redirect("/");
};
