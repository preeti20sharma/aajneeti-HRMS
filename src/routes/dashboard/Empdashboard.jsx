import { useState } from "react";
import { CalendarDays, User, ClipboardList } from "lucide-react";

const Empdashboard = () => {
    // Sample Employee Details
    const [employee, setEmployee] = useState({
        name: "Preeti Sharma",
        empId: "EMP123",
        department: "Development",
        designation: "React Developer",
        email: "preeti@example.com",
        phone: "+91 9876543210",
        joiningDate: "2024-05-01",
        leavesPolicy: {
            total: 24,
            casual: 8,
            sick: 8,
            earned: 8,
        },
        leavesTaken: [
            { date: "2025-09-05", type: "Casual", days: 1 },
            { date: "2025-09-12", type: "Sick", days: 1 },
        ],
    });

    // Generate current month calendar dates
    const getMonthDates = () => {
        const dates = [];
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        for (let d = 1; d <= lastDay.getDate(); d++) {
            dates.push(new Date(year, month, d));
        }
        return dates;
    };

    const monthDates = getMonthDates();
    const todayDate = new Date().getDate();

    return (
        <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 space-y-6">
            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold">Employee Dashboard</h2>
                <p className="mt-2 text-slate-900 dark:text-slate-50">Welcome back! {employee.name}</p>
            </div>

            {/* Employee Details */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User size={20} /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
                    <p><span className="font-semibold">Employee ID:</span> {employee.empId}</p>
                    <p><span className="font-semibold">Department:</span> {employee.department}</p>
                    <p><span className="font-semibold">Designation:</span> {employee.designation}</p>
                    <p><span className="font-semibold">Email:</span> {employee.email}</p>
                    <p><span className="font-semibold">Phone:</span> {employee.phone}</p>
                    <p><span className="font-semibold">Joining Date:</span> {employee.joiningDate}</p>
                </div>
            </div>

            {/* Running Month Calendar */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <CalendarDays size={20} /> {new Date().toLocaleString("default", { month: "long", year: "numeric" })} Calendar
                </h3>
                <div className="grid grid-cols-7 gap-1 mt-2 text-sm">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                        <div key={day} className="font-semibold text-center">{day}</div>
                    ))}
                    {monthDates.map(date => {
                        const isToday = date.getDate() === todayDate;
                        return (
                            <div
                                key={date.toISOString()}
                                className={`p-1 h-8 flex items-center justify-center rounded ${isToday ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-700"
                                    }`}
                            >
                                {date.getDate()}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Leave Policy */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <ClipboardList size={20} /> Leave Policy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 text-sm">
                    <p><span className="font-semibold">Total Leaves:</span> {employee.leavesPolicy.total}</p>
                    <p><span className="font-semibold">Casual:</span> {employee.leavesPolicy.casual}</p>
                    <p><span className="font-semibold">Sick:</span> {employee.leavesPolicy.sick}</p>
                    <p><span className="font-semibold">Earned:</span> {employee.leavesPolicy.earned}</p>
                </div>
            </div>

            {/* Leaves Taken */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <ClipboardList size={20} /> Leaves Utilized
                </h3>
                {employee.leavesTaken.length === 0 ? (
                    <p className="text-sm mt-1">No leaves taken yet.</p>
                ) : (
                    <table className="w-full text-sm border-collapse mt-2">
                        <thead>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                                <th className="border px-2 py-1">Date</th>
                                <th className="border px-2 py-1">Leave Type</th>
                                <th className="border px-2 py-1">Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.leavesTaken.map((leave, idx) => (
                                <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                    <td className="border px-2 py-1">{leave.date}</td>
                                    <td className="border px-2 py-1">{leave.type}</td>
                                    <td className="border px-2 py-1">{leave.days}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Empdashboard;
