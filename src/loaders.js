const URL = "https://bookmarkd-backend-dev.onrender.com"

export const bookMarksLoader = async () => {
    const response = await fetch(URL + "/bookmark");
    const bookMarks = await response.json();
   console.log(bookMarks)
    return bookMarks;
}

// export const bookMarkLoader = async ({params}) => {
//     const response = await fetch(URL + "/people/" + params.id);
//     const bookMark = await response.json();
//     return bookMark;
// }
