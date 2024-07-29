import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailCharacter from "./components/DetailCharacter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'detail/:id',
        element: <DetailCharacter/>
    }
])