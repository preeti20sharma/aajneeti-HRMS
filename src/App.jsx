import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Employees from "./routes/Employee";
import EmployeeGrid from "./routes/EmployeeGrid";
import Leaves from "./routes/Leaves";
import ShortLeaves from "./routes/ShortLeaves";
import CompanyHolidays from "./routes/Holiday";
import RemoteWork from "./routes/RemoteWork";
import EmployeeSalary from "./routes/Salary";
import WorkingHours from "./routes/WorkingHours";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import Logout from "./routes/logout/Logout";
import Empdashboard from "./routes/dashboard/Empdashboard";
import EditProfile from "./routes/EditProfile";

function App() {
    const router = createBrowserRouter([
        {
            path: "register",
            element: <Register />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "logout",
            element: <Logout />
        },

        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "employees-dashboard",
                    element: <Empdashboard />,
                },
                {
                    path: "all-employees",
                    element: <Employees />,
                },
                {
                    path: "edit-profile",
                    element: <EditProfile />
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
                    path: "extra-working-hours",
                    element: <WorkingHours />,
                },
                {
                    path: "remote-work",
                    element: <RemoteWork />,
                },
                {
                    path: "employees-salary",
                    element: <EmployeeSalary />,
                },

                {
                    path: "employeesgrid",
                    element: <EmployeeGrid />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "login",
                    element: <EmployeeGrid />,
                },
                {
                    path: "logout",
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
