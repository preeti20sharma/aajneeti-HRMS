import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Employees from "./routes/Employee";
import EmployeeGrid from "./routes/EmployeeGrid";
import AddEmployee from "./routes/AddEmployee";
import Leaves from "./routes/Leaves";
import ShortLeaves from "./routes/ShortLeaves";
import CompanyHolidays from "./routes/Holiday";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "all-employees",
                    element: <Employees />,
                },
                {
                    path: "add-employee",
                    element: <AddEmployee />
                },
                {
                    path: "reports",
                    element: <h1 className="title">Reports</h1>,
                },
                {
                    path: "holidays",
                    element: <CompanyHolidays />,
                },
                {
                    path: "leaves",
                    element: <Leaves />,
                },
                {
                    path: "short-leaves",
                    element: <ShortLeaves />,
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "employeesgrid",
                    element: <EmployeeGrid />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
