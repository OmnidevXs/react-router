import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import './css/yy.css'
import './css/route.css'
import './css/product.css'
// ---------------------------------
import Root     from "./routes/root";
import Contact  from "./routes/contact";
import ProductList from './routes/ProductList';

import ErrorPage from "./components/error-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <ProductList />,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);