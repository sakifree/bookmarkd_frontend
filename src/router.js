import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { bookMarksLoader } from './loaders';
import Index from './pages/Index';
// import Show from './pages/Show';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader= {bookMarksLoader}/>
        </Route>
    )
)

export default router