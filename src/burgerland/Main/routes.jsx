import Dashboard from "./Content/Body/Dashboard";
import Driver from "./Content/Body/Driver";
import Products from "./Content/Body/Products";
import Restaurant from "./Content/Body/Restaurant";

const routes= [
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/Driver", element: <Driver/>
    },
    {
        path: "/Products", element: <Products/>
    },
    {
        path: "/Restaurant", element: <Restaurant/>
    },
]

export default routes;