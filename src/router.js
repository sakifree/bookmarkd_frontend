import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { bookMarkLoader, bookMarksLoader } from './loaders';
import Index from './pages/Index';
import Show from './pages/Show';
import {createAction, deleteAction, updateAction } from "./actions";
// import Show from './pages/Show';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index className="container"/>} loader= {bookMarksLoader}/>
            <Route path="create" action={createAction}/>
            <Route path = ":id" element={<Show className="container"/>} loader={bookMarkLoader} />
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction} />
        </Route>
        
    )
)

export default router