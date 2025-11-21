import { useState } from "react";
import { CalendarDays, ClipboardList } from "lucide-react";
import ProfileImage from "@/assets/profile-image.jpg";
import { Link } from "react-router-dom";

const Empdashboard = () => {
    const [employee] = useState({
        name: "Preeti Sharma",
        image: ProfileImage,
        empId: "EMP123",
        department: "Development",
        designation: "React Developer",
        email: "preeti@example.com",
        phone: "+91 9876543210",
        joiningDate: "2024-05-01",
        leavesPolicy: [
            { category: "Employee", month: "Any", fulldayLeave: "1 per month", halfdayLeave: "1 per month", PaidUnpaidRule: "Paid (No deduction)", noticePeriod: "1 day prior" },
            { category: "Interns", month: "1st", fulldayLeave: 0, halfdayLeave: 0, PaidUnpaidRule: "Unpaid (Deduction if leave taken)", noticePeriod: "Immediate" },
            { category: "Interns", month: "2nd+", fulldayLeave: "1 per month", halfdayLeave: "1 per month", PaidUnpaidRule: "Paid (No deduction)", noticePeriod: "1 day prior" },
        ],
        leavesTaken: [
            { date: "25-09-2025", type: "Sick", duration: "Full Day", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "28-08-2025", type: "Casual", duration: "Half Day", days: "1", status: "Rejected", approvedBy: "HR" },
            { date: "23-09-2025", type: "Sick", duration: "Full Day", days: "1", status: "Approved", approvedBy: "Manager" },
        ],
        remoteWork: [
            { from: "25-09-2025", to: "28-09-2025", days: "03", reason: "Health Issues", status: "Approved", approvedBy: "Manager" },
            { from: "25-08-2025", to: "29-08-2025", days: "04", reason: "Urgent Work", status: "rejected", approvedBy: "HR" },
            { from: "25-09-2025", to: "28-09-2025", days: "03", reason: "Health Issues", status: "Approved", approvedBy: "Manager" },
        ],
        extraWorkingHours: [
            { date: "25-09-2025", inTime: "4:34 PM", outTime: "8:32 PM", totalHours: "04", workingPlace: "At Office", reason: "Urgent delivered", approvedBy: "Manager", compensationType: "paid overtime" },
            { date: "24-08-2025", inTime: "9:10 PM", outTime: "12:10 AM", totalHours: "03", workingPlace: "From Home", reason: "project deadline", approvedBy: "HR", compensationType: "paid overtime" },
            { date: "25-09-2025", inTime: "4:34 PM", outTime: "8:32 PM", totalHours: "04", workingPlace: "At Office", reason: "Urgent delivered", approvedBy: "Manager", compensationType: "paid overtime" },
        ],
        salary: [
            { basic: "30000", hra: "15000", allowance: "5000", deductions: "2000", net: "48000" },
        ]
    });

    const leavesStatus = {
        total: employee.leavesTaken.length,
        fullLeave: employee.leavesTaken.filter(l => l.duration === "Full Day").length,
        halfLeave: employee.leavesTaken.filter(l => l.duration === "Half Day").length,
        workingDays: 30 - employee.leavesTaken.length,
    };


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
        <div className="p-2 md:p-2 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 space-y-6">

            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold">Employee Dashboard</h2>
                <p className="mt-2">Welcome back! {employee.name}</p>
            </div>

            {/* Employee Info + Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Employee Details */}
                <div className="bg-white dark:bg-slate-800 sm:p-6 p-2 rounded-xl shadow">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={employee.image}
                                alt={employee.name}
                                className="size-16 rounded-xl object-cover shadow-md"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{employee.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{employee.designation}</p>
                            </div>
                        </div>
                        <Link to="/edit-profile" state={{ employee }}>
                            <button className="bg-red-800 text-slate-200 sm:p-2 p-2 rounded-lg">Edit Profile</button>
                        </Link>
                    </div>
                    <table className="w-full text-md">
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
                    <div className="grid grid-cols-7 gap-1 mt-3 text-md">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="font-semibold text-center">{day}</div>
                        ))}
                        {monthDates.map(date => {
                            const isToday = date.getDate() === todayDate;
                            return (
                                <div
                                    key={date.toISOString()}
                                    className={`p-2 h-10 flex items-center justify-center rounded ${isToday ? "bg-red-800 text-white" : "bg-slate-100 dark:bg-slate-700"}`}
                                >
                                    {date.getDate()}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Leaves Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Leaves Utilized */}
                <div className="bg-white lg:col-span-2 dark:bg-slate-800 px-2 sm:px-6 py-6 rounded-xl shadow overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Leaves Utilized
                    </h3>
                    {employee.leavesTaken.length === 0 ? (
                        <p className="text-md mt-2">No leaves taken yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-gradient-to-r from-red-700 to-black text-slate-200 dark:bg-slate-700">
                                    <th className="border px-2 py-1">Date</th>
                                    <th className="border px-2 py-1">Type</th>
                                    <th className="border px-2 py-1">Duration Type</th>
                                    <th className="border px-2 py-1">Days</th>
                                    <th className="border px-2 py-1">Status</th>
                                    <th className="border px-2 py-1">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.leavesTaken.map((leave, idx) => (
                                    <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <td className="border px-2 py-1">{leave.date}</td>
                                        <td className="border px-2 py-1">{leave.type}</td>
                                        <td className="border px-2 py-1">{leave.duration}</td>
                                        <td className="border px-2 py-1">{leave.days}</td>
                                        <td className={`border px-2 py-1 font-semibold ${leave.status === "Approved" ? "text-green-600" : "text-red-600"}`}>
                                            {leave.status}
                                        </td>
                                        <td className="border px-2 py-1">{leave.approvedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Leave Status */}
                <div className="bg-white lg:col-span-1 dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold flex items-center gap-2  border-b border-slate-200 dark:border-slate-700 pb-2">
                        <ClipboardList size={20} /> Leaves Status
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-3 text-md">
                        <p><span className="font-semibold me-2">Total Leaves:</span> {leavesStatus.total}</p>
                        <p><span className="font-semibold me-2">Full Leave:</span> {leavesStatus.fullLeave}</p>
                        <p><span className="font-semibold me-2">Half Leave:</span> {leavesStatus.halfLeave}</p>
                        <p><span className="font-semibold me-2">Working days:</span> {leavesStatus.workingDays}</p>
                    </div>
                </div>
            </div>
            {/* leave policy */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Leaves Policy
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                                <th className="border px-2 py-1">Category</th>
                                <th className="border px-2 py-1">Month</th>
                                <th className="border px-2 py-1">Full day leave</th>
                                <th className="border px-2 py-1">Half day leave</th>
                                <th className="border px-2 py-1">Paid/Unpaid Rule</th>
                                <th className="border px-2 py-1">Notice Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.leavesPolicy.map((leave, idx) => (
                                <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                    <td className="border px-2 py-1">{leave.category}</td>
                                    <td className="border px-2 py-1">{leave.month}</td>
                                    <td className="border px-2 py-1">{leave.fulldayLeave}</td>
                                    <td className="border px-2 py-1">{leave.halfdayLeave}</td>
                                    <td className="border px-2 py-1">{leave.PaidUnpaidRule}</td>
                                    <td className="border px-2 py-1">{leave.noticePeriod}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Work from home */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Work From Home
                    </h3>
                    {employee.remoteWork.length === 0 ? (
                        <p className="text-md mt-2">No remote work records yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-slate-200 dark:bg-slate-700">
                                    <th className="border px-2 py-1">From Date</th>
                                    <th className="border px-2 py-1">To Date</th>
                                    <th className="border px-2 py-1">Days</th>
                                    <th className="border px-2 py-1">Reason</th>
                                    <th className="border px-2 py-1">Status</th>
                                    <th className="border px-2 py-1">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.remoteWork.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <td className="border px-2 py-1">{work.from}</td>
                                        <td className="border px-2 py-1">{work.to}</td>
                                        <td className="border px-2 py-1">{work.days}</td>
                                        <td className="border px-2 py-1">{work.reason}</td>
                                        <td className="border px-2 py-1">{work.status}</td>
                                        <td className="border px-2 py-1">{work.approvedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {/* Extra Working Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Extra Working Hours
                    </h3>
                    {employee.extraWorkingHours.length === 0 ? (
                        <p className="text-md mt-2">No extra working record yet. </p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-slate-200 dark:bg-slate-700">
                                    <th className="border px-2 py-1">Date</th>
                                    <th className="border px-2 py-1">In Time</th>
                                    <th className="border px-2 py-1">Out Time</th>
                                    <th className="border px-2 py-1">Total Hours</th>
                                    <th className="border px-2 py-1">Working Place</th>
                                    <th className="border px-2 py-1">Reason</th>
                                    <th className="border px-2 py-1">Approved By</th>
                                    <th className="border px-2 py-1">Compensation Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.extraWorkingHours.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <td className="border px-2 py-1">{work.date}</td>
                                        <td className="border px-2 py-1">{work.inTime}</td>
                                        <td className="border px-2 py-1">{work.outTime}</td>
                                        <td className="border px-2 py-1">{work.totalHours}</td>
                                        <td className="border px-2 py-1">{work.workingPlace}</td>
                                        <td className="border px-2 py-1">{work.reason}</td>
                                        <td className="border px-2 py-1">{work.approvedBy}</td>
                                        <td className="border px-2 py-1">{work.compensationType}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {/* Salary Details */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Salary Details
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                                <th className="border px-2 py-1">Basic</th>
                                <th className="border px-2 py-1">HRA</th>
                                <th className="border px-2 py-1">Allowance</th>
                                <th className="border px-2 py-1">Deductions</th>
                                <th className="border px-2 py-1">Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.salary.map((salary, idx) => (
                                <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
                                    <td className="border px-2 py-1 text-center">{salary.basic}</td>
                                    <td className="border px-2 py-1 text-center">{salary.hra}</td>
                                    <td className="border px-2 py-1 text-center">{salary.allowance}</td>
                                    <td className="border px-2 py-1 text-center">{salary.deductions}</td>
                                    <td className="border px-2 py-1 text-center">{salary.net}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Empdashboard;
