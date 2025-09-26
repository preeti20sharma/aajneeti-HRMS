import { useState } from "react";
import { CalendarDays, ClipboardList } from "lucide-react";
import ProfileImage from "@/assets/profile-image.jpg";

const Empdashboard = () => {
    const [employee] = useState({
        name: "Preeti Sharma",
        empId: "EMP123",
        department: "Development",
        designation: "React Developer",
        email: "preeti@example.com",
        phone: "+91 9876543210",
        joiningDate: "2024-05-01",
        leavesPolicy: {
            total: 2,
            casual: 1,
            sick: 1,
            earned: 28,
        },
        leavesTaken: [
            { date: "2025-09-05", type: "Casual", days: 1, status: "Approved" },
            { date: "2025-09-12", type: "Sick", days: 1, status: "Rejected" },
        ],
    });

    // Calendar logic
    const getMonthDates = () => {
        const dates = [];
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
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
                <p className="mt-2">Welcome back! {employee.name}</p>
            </div>

            {/* Employee Info + Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Employee Details */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={ProfileImage}
                            alt={employee.name}
                            className="size-16 rounded-xl object-cover shadow-md"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{employee.name}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{employee.designation}</p>
                        </div>
                    </div>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Employee ID</td><td className="px-4 py-2">{employee.empId}</td></tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Department</td><td className="px-4 py-2">{employee.department}</td></tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Designation</td><td className="px-4 py-2">{employee.designation}</td></tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Email</td><td className="px-4 py-2">{employee.email}</td></tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Phone</td><td className="px-4 py-2">{employee.phone}</td></tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-2 font-semibold">Joining Date</td><td className="px-4 py-2">{employee.joiningDate}</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Calendar */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <CalendarDays size={20} /> {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
                    </h3>
                    <div className="grid grid-cols-7 gap-1 mt-3 text-sm">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="font-semibold text-center">{day}</div>
                        ))}
                        {monthDates.map(date => {
                            const isToday = date.getDate() === todayDate;
                            return (
                                <div
                                    key={date.toISOString()}
                                    className={`p-2 h-10 flex items-center justify-center rounded ${isToday ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-700"}`}
                                >
                                    {date.getDate()}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Leaves Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Leaves Utilized */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Leaves Utilized
                    </h3>
                    {employee.leavesTaken.length === 0 ? (
                        <p className="text-sm mt-2">No leaves taken yet.</p>
                    ) : (
                        <table className="w-full text-sm border-collapse mt-3">
                            <thead>
                                <tr className="bg-slate-200 dark:bg-slate-700">
                                    <th className="border px-2 py-1">Date</th>
                                    <th className="border px-2 py-1">Type</th>
                                    <th className="border px-2 py-1">Days</th>
                                    <th className="border px-2 py-1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.leavesTaken.map((leave, idx) => (
                                    <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <td className="border px-2 py-1">{leave.date}</td>
                                        <td className="border px-2 py-1">{leave.type}</td>
                                        <td className="border px-2 py-1">{leave.days}</td>
                                        <td className={`border px-2 py-1 font-semibold ${leave.status === "Approved" ? "text-green-600" : "text-red-600"}`}>
                                            {leave.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Leave Policy */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Leave Policy
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                        <p><span className="font-semibold">Total:</span> {employee.leavesPolicy.total}</p>
                        <p><span className="font-semibold">Casual:</span> {employee.leavesPolicy.casual}</p>
                        <p><span className="font-semibold">Sick:</span> {employee.leavesPolicy.sick}</p>
                        <p><span className="font-semibold">Earned:</span> {employee.leavesPolicy.earned}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empdashboard;
