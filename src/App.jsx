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
import AdminProfile from "./routes/AdminProfile";
import Attendance from "./routes/Attendance";
import Shift from "./routes/Shift";
import TeamDashboard from "./routes/dashboard/TeamDashboard";
import WorkingDays from "./routes/WorkingDays";
import HalfLeaves from "./routes/HalfLeave";
import Department from "./routes/Department";
import Warnings from "./routes/Warnings";
import Achievements from "./routes/Achievements";
import Notifications from "./routes/Notification";
import EmployeeBankDetails from "./routes/EmployeeBankdetails";
import AttendanceInsights from "./routes/AttendanceInsights";
import PendingRequest from "./routes/PendingRequest";

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
                    path: "team-dashboard",
                    element: <TeamDashboard />,
                },
                {
                    path: "all-employees",
                    element: <Employees />,
                },
                {
                    path: "department",
                    element: <Department />
                },
                {
                    path: "warnings",
                    element: <Warnings />,
                },
                {
                    path: "achievements",
                    element: <Achievements />,
                },
                {
                    path: "notifications",
                    element: <Notifications />,
                },
                {
                    path: "bank-details",
                    element: <EmployeeBankDetails />,
                },
                {
                    path: "edit-profile",
                    element: <EditProfile />
                },
                {
                    path: "attendance-insights",
                    element: <AttendanceInsights />
                },
                {
                    path: "admin-profile",
                    element: <AdminProfile />
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
                    path: "working-days-calculation",
                    element: <WorkingDays />
                },
                {
                    path: "leaves",
                    element: <Leaves />,
                },
                {
                    path: "half-leaves",
                    element: <HalfLeaves />
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
                    path: "attendance-report",
                    element: <Attendance />,
                },
                {
                    path: "pending-request",
                    element: <PendingRequest />
                },
                {
                    path: "shift-timing",
                    element: <Shift />
                },
                {
                    path: "achievements",
                    element: <Shift />
                },
                {
                    path: "shift-timing",
                    element: <Shift />
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
