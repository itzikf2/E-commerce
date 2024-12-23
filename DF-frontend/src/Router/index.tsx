import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { AboutPage, HomePage } from "../Pages";
import Clothes from "../Pages/Clothes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element:<HomePage/>,
            },
            {
                path: 'Ropa',
                element:<Clothes/>
            },
            {
                path: 'nosotros',
                element:<AboutPage/>,
            },
        ]
    }
]);