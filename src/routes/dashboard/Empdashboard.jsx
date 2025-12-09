import { useState } from "react";
import { CalendarDays, ClipboardList, Clock10, FileClock, Wifi, Home } from "lucide-react";
import ProfileImage from "@/assets/profile-image.jpg";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import { Users } from "lucide-react";

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
            { date: "25-09-2025", type: "Sick", duration: "Full leave", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "23-09-2025", type: "Sick", duration: "Full leave", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "08-08-2025", type: "Sick", duration: "Half leave", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "03-06-2025", type: "Sick", duration: "Half leave", days: "1", status: "Approved", approvedBy: "Manager" },

        ],
        CalenderStatus: [
            { date: "25-09-2025", duration: "Full leave", days: "1", status: "Approved" },
            { date: "04-08-2025", duration: "Short leave", days: "1", status: "Rejected" },
            { date: "23-09-2025", duration: "Full leave", days: "1", status: "Approved" },
            { date: "08-08-2025", duration: "Half leave", days: "1", status: "Approved" },
            { date: "03-06-2025", duration: "Half leave", days: "1", status: "Approved" },
        ],
        shortLeaves: [
            { date: "25-09-2025", startTime: "4:30 PM", endTime: "6:30 PM", totalHours: "02", reason: "Urgent work", approvedBy: "Manager" },
            { date: "24-08-2025", startTime: "9:00 AM", endTime: "10:00 AM", totalHours: "01", reason: "healthh issue", approvedBy: "HR" },
            { date: "25-09-2025", startTime: "4:34 PM", endTime: "8:32 PM", totalHours: "04", reason: "other reason", approvedBy: "Manager" },
        ],
        saturdayStatus: [
            { date: "16-08-2025", status: "from office" },
            { date: "02-08-2025", status: "from home" },
            { date: "23-08-2025", status: "from office" },
            { date: "06-09-2025", status: "from office" },
            { date: "13-09-2025", status: "from office" }
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

    // const leavesStatus = {
    //     total: employee.leavesTaken.length,
    //     fullLeave: employee.leavesTaken.filter(l => l.duration === "Full Day").length,
    //     halfLeave: employee.leavesTaken.filter(l => l.duration === "Half Day").length,
    //     workingDays: 30 - employee.leavesTaken.length,
    // };
    const [selectedMonth, setSelectedMonth] = useState("");

    // Filter Leaves Used Section
    const filteredLeaves = employee.leavesTaken.filter((leave) => {
        if (!selectedMonth) return true;

        const [d, m, y] = leave.date.split("-"); // DD-MM-YYYY
        return `${y}-${m}` === selectedMonth;
    });
    const monthlyFilteredLeaves = filteredLeaves;

    const filteredWFH = employee.remoteWork.filter((r) => {
        if (!selectedMonth) return true;

        const [d, m, y] = r.from.split("-");
        return `${y}-${m}` === selectedMonth;
    });
    const monthlyFilteredWFH = filteredWFH;

    const filteredExtraWorkingHr = employee.extraWorkingHours.filter((r) => {
        if (!selectedMonth) return true;

        const [d, m, y] = r.date.split("-");
        return `${y}-${m}` === selectedMonth;
    });
    const monthlyFilteredExtrawork = filteredExtraWorkingHr;

    const filteredShortLeave = employee.shortLeaves.filter((r) => {
        if (!selectedMonth) return true;
        const [d, m, y] = r.date.split("-");
        return `${y}-${m}` === selectedMonth;
    });
    const monthlyFilteredShortLeave = filteredShortLeave;

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const saturdayAttendance = {};
    employee.saturdayStatus?.forEach(a => {
        const [d, m, y] = a.date.split("-");
        const dt = new Date(y, m - 1, d);
        const key = dt.toISOString().split("T")[0];

        if (dt.getDay() === 6) {
            saturdayAttendance[key] =
                a.status.toLowerCase() === "from office" ? "C" : "WFH";
        }
    });


    // Extract Year + Month
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    //  GENERATE DATES FOR SELECTED MONTH
    const generateCalendar = () => {
        const result = [];
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Empty cells before day 1
        for (let i = 0; i < firstDay.getDay(); i++) {
            result.push(null);
        }

        // Actual dates of the month
        for (let d = 1; d <= lastDay.getDate(); d++) {
            result.push(new Date(year, month, d));
        }

        return result;
    };

    const rawDates = generateCalendar();

    //  BUILD STATUS MAP (FL / SL / WFH)
    const leaveStatusMap = {};

    // Full Leave or Half Leave
    employee.CalenderStatus.forEach(l => {
        //  Skip rejected or unapproved leaves
        if (l.status !== "Approved") return;
        const [day, mon, yr] = l.date.split("-");
        const dateKey = `${yr}-${mon}-${day}`;
        if (l.duration === "Full leave") leaveStatusMap[dateKey] = "FL";
        if (l.duration === "Short leave") leaveStatusMap[dateKey] = "SL";
        if (l.duration === "Half leave") leaveStatusMap[dateKey] = "HL";
    });

    // WFH (date range)
    employee.remoteWork.forEach(w => {
        const [fd, fm, fy] = w.from.split("-");
        const [td, tm, ty] = w.to.split("-");

        let start = new Date(fy, fm - 1, fd);
        const end = new Date(ty, tm - 1, td);

        while (start <= end) {
            const key = start.toISOString().split("T")[0];
            leaveStatusMap[key] = "WFH";
            start.setDate(start.getDate() + 1);
        }
    });

    // ★ Track which weekdays had WFH
    const weekdayWFH = {};  // Example: {"2025-09": true}

    employee.remoteWork.forEach(w => {
        const [fd, fm, fy] = w.from.split("-");
        const [td, tm, ty] = w.to.split("-");

        let start = new Date(fy, fm - 1, fd);
        const end = new Date(ty, tm - 1, td);

        while (start <= end) {
            if (start.getDay() !== 6) {
                // If weekday WFH (Mon–Fri)
                const key = `${start.getFullYear()}-${start.getMonth()}`;
                weekdayWFH[key] = true;
            }
            start.setDate(start.getDate() + 1);
        }
    });


    //  FINAL CALENDAR ARRAY WITH REMARKS
    const calendarDates = rawDates.map(date => {
        if (!date) return null;
        const key = date.toISOString().split("T")[0];
        let remark = leaveStatusMap[key] || null;
        //  1: Default Saturday = WFH
        if (!remark && date.getDay() === 6) {
            remark = "WFH";
        }

        //  2: Compensation Saturday only if:
        //    a) weekday WFH happened
        //    b) employee was PRESENT on that Saturday
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        const satKey = key;

        if (date.getDay() === 6) {
            if (weekdayWFH[monthKey] && saturdayAttendance[satKey] === "C") {
                remark = "C";
            }
        }

        return { date, remark };
    });


    const getRemarkColor = (remark) => {
        switch (remark) {
            case "FL":
                return "bg-red-200 text-black";
            case "HL":
                return "bg-yellow-100 text-black";
            case "SL":
                return "bg-green-100 text-black";
            case "WFH":
                return "bg-blue-200 text-black";
            case "C":
                return "bg-purple-200 text-black";
            default:
                return "bg-red-50 dark:bg-slate-700";
        }
    };


    return (
        <div className="p-2 md:p-2 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 space-y-6">

            {/* Welcome Section */}
            <div className="flex flex-col p-2">
                <div className="flex items-center gap-2">
                    <Home size={24} className="text-red-800 dark:text-red-600" />
                    <h2 className="text-2xl font-bold 
                    bg-gradient-to-r from-red-800 to-slate-900 
                    bg-clip-text text-transparent 
                    animate-gradient-slide
                    dark:text-slate-100">Employee Dashboard</h2>
                </div>
                <p className="mt-2 ml-8 text-red-800 dark:text-white">Welcome back! {employee.name}</p>
            </div>
            {/* Employee Info + Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* ================= EMPLOYEE PROFILE (SMALL) ================= */}
                <div className="
                        bg-white dark:bg-slate-800
                        p-4 rounded-xl shadow-md border border-red-100 dark:border-slate-700
                        hover:shadow-red-500/20 dark:hover:shadow-none dark:hover:border-slate-700
                        transition-all duration-300
                    ">

                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={employee.image}
                                alt={employee.name}
                                className="w-14 h-14 rounded-xl object-cover shadow-md border-2 border-red-100"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white leading-tight">
                                    {employee.name}
                                </h3>
                                <p className="text-red-800 dark:text-red-500 text-md font-medium">
                                    {employee.designation}
                                </p>
                            </div>
                        </div>
                        {/* BUTTON – Only Light Theme Red */}
                        <Link to="/edit-profile" state={{ employee }}>
                            <button className="
                                px-3 py-2 rounded-lg text-slate-200 
                                bg-red-800 hover:bg-red-900 
                                dark:bg-slate-700 dark:hover:bg-slate-600
                                transition-all">
                                Edit Profile
                            </button>
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="my-3 h-[1px] bg-gradient-to-r from-red-500 to-transparent dark:from-red-500"></div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                            ["Employee ID", employee.empId],
                            ["Department", employee.department],
                            ["Designation", employee.designation],
                            ["Email", employee.email],
                            ["Phone", employee.phone],
                            ["Joining Date", employee.joiningDate]
                        ].map(([label, value], idx) => (
                            <div key={idx} className="
                    bg-red-50/40 dark:bg-slate-700/40
                    p-2 rounded-lg border border-red-100/60 dark:border-slate-600
                    hover:bg-red-100/50 dark:hover:bg-slate-700 transition
                ">
                                <p className="text-[16px] text-red-800 dark:text-red-500 font-semibold tracking-wide">
                                    {label}
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white mt-1">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= CALENDAR (SMALL) ================= */}
                <div className="
        bg-white dark:bg-slate-800 
        p-4 rounded-xl shadow-md border border-red-100 dark:border-slate-700 
        hover:shadow-red-500/20 dark:hover:shadow-none transition-all duration-300
    ">

                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-3">
                        <button
                            onClick={() => setCurrentMonth(new Date(year, month - 1))}
                            className="px-2 py-1 bg-red-800 hover:bg-red-800 text-white text-md rounded"
                        >
                            Prev
                        </button>

                        <h3 className="text-base font-bold text-slate-700 dark:text-white flex items-center gap-1">
                            <CalendarDays size={18} className="text-red-800" />
                            {currentMonth.toLocaleString("default", { month: "short", year: "numeric" })}
                        </h3>

                        <button
                            onClick={() => setCurrentMonth(new Date(year, month + 1))}
                            className="px-2 py-1 bg-red-800 hover:bg-red-800 text-white text-md rounded"
                        >
                            Next
                        </button>
                    </div>

                    {/* Weekdays Row */}
                    <div className="
            grid grid-cols-7 text-center font-semibold text-[16px] 
            text-red-900 dark:text-red-300 mb-1
        ">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="py-0.5">{day}</div>
                        ))}
                    </div>

                    {/* Calendar Dates */}
                    <div className="grid grid-cols-7 gap-1 text-[16px]">
                        {calendarDates.map((item, index) => {
                            if (!item) return <div key={index} className="h-10"></div>;

                            const { date, remark } = item;

                            const isToday =
                                date.getDate() === new Date().getDate() &&
                                date.getMonth() === new Date().getMonth() &&
                                date.getFullYear() === new Date().getFullYear();

                            return (
                                <div
                                    key={date.toISOString()}
                                    className={`
                            h-12 rounded flex flex-col items-center justify-center
                            border border-red-100/40 dark:border-slate-600 
                            ${getRemarkColor(remark)}
                            ${isToday ? "ring-2 ring-red-900" : ""}
                            hover:bg-red-100/70 dark:hover:bg-slate-700/40 
                            transition-all cursor-pointer
                        `}
                                >
                                    {/* Date */}
                                    <span className="font-bold text-[16px]">{date.getDate()}</span>

                                    {/* Remark */}
                                    {remark && (
                                        <span className="text-[10px] font-bold mt-0.5 px-1 rounded bg-white/40 dark:bg-black/30">
                                            {remark}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend - Smaller */}
                    <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
                        <div className="flex gap-1 items-center">
                            <span className="w-6 h-6 bg-red-200 rounded"></span> Full Leave
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="w-6 h-6 bg-yellow-100 rounded"></span> Half Leave
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="w-6 h-6 bg-green-100 rounded"></span> Short Leave
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="w-6 h-6 bg-blue-200 rounded"></span> WFH
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="w-6 h-6 bg-purple-200 rounded"></span> Compensation
                        </div>
                    </div>

                </div>

            </div>

            {/* total working days calculation */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="
                                    bg-white dark:bg-slate-800 
                                    p-6 rounded-2xl shadow-xl
                                    shadow-red-300/20 dark:shadow-none
                                    border border-red-100 dark:border-slate-700
                                    transition-all duration-300
                                ">

                    {/* HEADER */}
                    <h3 className="text-xl font-semibold flex items-center gap-2 
                        text-red-700 dark:text-red-500 mb-6 tracking-wide">
                        <ClipboardList size={22} /> Payable Working Days Calculation Slip
                    </h3>

                    {/* SLIP BOX */}
                    <div className="
                                        relative overflow-hidden
                                        rounded-2xl p-6 
                                        bg-white
                                        dark:bg-gradient-to-br dark:from-slate-700 dark:via-slate-800 dark:to-slate-900
                                        border border-red-200 dark:border-slate-600
                                        shadow-inner
                                    ">

                        {/* Decorative Shine */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                            from-transparent via-red-400/50 to-transparent dark:via-red-200/40">
                        </div>

                        <div className="space-y-4 text-md font-medium">

                            {/* ROW TEMPLATE */}
                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Total Days in Month</span>
                                <span className="font-semibold text-slate-900 dark:text-white">30</span>
                            </div>

                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Present Days</span>
                                <span className="font-semibold text-green-700 dark:text-green-300">24</span>
                            </div>

                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Full Leaves</span>
                                <span className="font-semibold text-red-700 dark:text-red-300">2</span>
                            </div>

                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Half Leaves (0.5 × count)</span>
                                <span className="font-semibold text-yellow-700 dark:text-yellow-300">1.0</span>
                            </div>

                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Short Leaves (hrs converted)</span>
                                <span className="font-semibold text-green-700 dark:text-green-300">0.5</span>
                            </div>

                            <div className="flex justify-between pb-2 border-b border-red-200/60 dark:border-slate-600">
                                <span>Extra Working Hours (converted)</span>
                                <span className="font-semibold text-purple-700 dark:text-purple-300">1.0</span>
                            </div>

                            {/* PAYABLE DAYS */}
                            <div className="flex justify-between mt-4 pt-4 
                                            border-t border-red-300 dark:border-slate-500">
                                <span className="text-base font-bold tracking-wide">Payable Working Days</span>
                                <div>
                                    <span className="text-xl font-extrabold text-green-700 dark:text-green-300">
                                        26.5
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative bottom shine */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                                    from-transparent via-red-400/30 to-transparent dark:via-red-200/30">
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaves Info */}
            <div>
                {/* Leaves Utilized */}
                <div className="
                    bg-white 
                    px-4 sm:px-6 py-6 
                    rounded-xl  
                    overflow-auto  transition-all duration-300   shadow-md 
                  shadow-red-500/20 
                  hover:shadow-red-500/20
                    dark:shadow-none 
                    dark:hover:shadow-none hover:border-red-700 dark:hover:border-none
                    dark:bg-slate-800">
                    <div className="flex flex-col sm:flex-row  sm:justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-900 dark:text-slate-50">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" />
                            Leaves Utilized
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>

                    {employee.leavesTaken.length === 0 ? (
                        <p className="text-md mt-2 text-slate-700 dark:text-slate-300">No leaves taken yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-4 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="text-left
                       bg-red-50
                        dark:bg-slate-700 dark:text-slate-100">
                                    <th className=" px-3 py-2 ">Date</th>
                                    <th className=" px-3 py-2 ">Type</th>
                                    <th className=" px-3 py-2 ">Duration Type</th>
                                    <th className=" px-3 py-2 ">Days</th>
                                    <th className=" px-3 py-2 ">Status</th>
                                    <th className=" px-3 py-2 ">Approved By</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-900 dark:text-slate-200">
                                {monthlyFilteredLeaves.map((leave, idx) => (
                                    <tr key={idx} className="
                            hover:bg-red-50/60 
                            dark:hover:bg-slate-800
                            transition-all 
                            border-b border-red-100 dark:border-slate-700">
                                        <td className="px-3 py-2">{leave.date}</td>
                                        <td className="px-3 py-2">{leave.type}</td>
                                        <td className="px-3 py-2">{leave.duration}</td>
                                        <td className="px-3 py-2">{leave.days}</td>

                                        {/* STATUS - Light Mode = Color Badge, Dark Mode = Original */}
                                        <td className="px-3 py-2">
                                            <span className={` px-3 py-1 rounded-full text-xs font-semibold ${leave.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-transparent dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-transparent dark:text-red-400"} `}>
                                                {leave.status}
                                            </span>
                                        </td>

                                        <td className="px-3 py-2">{leave.approvedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                {/* Leave Status */}
                {/* <div className="bg-white lg:col-span-1 dark:bg-slate-800 p-6 rounded-xl  shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    
                    dark:shadow-none 
                    dark:hover:shadow-none">
                    <h3 className="text-lg font-semibold flex items-center gap-2  border-b border-slate-200 dark:border-slate-700 pb-2">
                        <ClipboardList size={20} /> Leaves Status
                    </h3>
                    <div className="grid grid-cols-1 gap-4 mt-3 text-md">
                        <p><span className="font-semibold me-2">Total Leaves:</span> {leavesStatus.total}</p>
                        <p><span className="font-semibold me-2">Full Leave:</span> {leavesStatus.fullLeave}</p>
                        <p><span className="font-semibold me-2">Half Leave:</span> {leavesStatus.halfLeave}</p>
                        <p><span className="font-semibold me-2">Working days:</span> {leavesStatus.workingDays}</p>
                    </div>
                </div> */}
            </div>


            {/* Credit Summary */}
            <div>
                <div
                    className="
            bg-white dark:bg-slate-800
            p-6 rounded-xl overflow-auto
            transition-all duration-300
            shadow-md shadow-red-500/20 hover:shadow-red-600/30
            border border-transparent dark:shadow-none
        "
                >
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-red-700 dark:text-white">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Credit summary
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2 mb-4">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {/* Cards Array */}
                        {[
                            { label: "Full Leave", value: 40, icon: CalendarDays },
                            { label: "Half Leave", value: 32, icon: FileClock },
                            { label: "Short Leave", value: 5, icon: Clock10 },
                            { label: "Work From Home", value: 3, icon: Wifi },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="
                        flex flex-col justify-between 
                        border border-red-100 dark:border-slate-700 
                        bg-white dark:bg-slate-800 
                        shadow-lg rounded-xl 
                        transition-all 
                        hover:shadow-red-600/30 dark:hover:shadow-none
                        p-4
                    "
                            >
                                {/* Card Icon & Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-900">
                                        <Users size={26} />
                                    </div>
                                    <p className="text-md font-semibold text-slate-900 dark:text-slate-100">
                                        {card.label}
                                    </p>
                                </div>

                                {/* Value Display */}
                                <div className="bg-red-50 dark:bg-slate-900 rounded-lg p-3 text-center">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        {card.value}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Leaves Balance Summary */}
            <div>
                <div
                    className="
            bg-white dark:bg-slate-800
            p-6 rounded-xl overflow-auto
            transition-all duration-300
            shadow-md shadow-red-500/20 hover:shadow-red-600/30
            border border-transparent dark:shadow-none
        "
                >
                    <div className="flex  flex-col sm:flex-row justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-red-700 dark:text-white mb-6">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Leaves Balance Summary
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2 mb-4">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                        {/* Cards Array */}
                        {[
                            { label: "Full Leave", value: 4, icon: CalendarDays },
                            { label: "Half Leave", value: 2, icon: FileClock },
                            { label: "Short Leave", value: 1, icon: Clock10 },

                        ].map((card, i) => (
                            <div
                                key={i}
                                className="
                        flex flex-col justify-between 
                        border border-red-100 dark:border-slate-700 
                        bg-white dark:bg-slate-800 
                        shadow-lg rounded-xl 
                        transition-all 
                        hover:shadow-red-600/30 
                        p-4
                    "
                            >
                                {/* Card Icon & Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-900">
                                        <card.icon size={26} />
                                    </div>
                                    <p className="text-md font-semibold text-slate-900 dark:text-slate-100">
                                        {card.label}
                                    </p>
                                </div>

                                {/* Value Display */}
                                <div className="bg-red-50 dark:bg-slate-900 rounded-lg p-3 text-center">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        {card.value}
                                    </p>
                                    {/* New Label */}
                                    <p className="text-xs mt-1 text-red-700 dark:text-slate-300 font-medium">
                                        Available to Use
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*Short Leave Overview*/}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl  shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    
                    dark:shadow-none 
                    dark:hover:shadow-none overflow-auto">
                    <div className="flex  flex-col sm:flex-row justify-between">
                        <h3 className="text-lg font-medium flex items-center gap-2 text-red-800 dark:text-slate-200">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Short Leave
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>
                    {employee.shortLeaves.length === 0 ? (
                        <p className="text-md mt-2">No extra working record yet. </p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-red-50 text-red-800 dark:text-slate-200 dark:bg-slate-700">
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Date</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Start Time</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">End Time</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Total Hours</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Reason</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyFilteredShortLeave.map((shortLeave, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.date}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.startTime}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.endTime}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.totalHours}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.reason}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{shortLeave.approvedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* leave policy */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl overflow-auto  transition-all duration-300  shadow-md 
  shadow-red-500/20 
  hover:shadow-red-500/20
  
  dark:shadow-none 
  dark:hover:shadow-none hover:border-red-700 dark:hover:border-none">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-red-800 dark:text-slate-200">
                        <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Leaves Policy
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-red-50 text-red-800 dark:text-slate-200 dark:bg-slate-700  transition-all duration-300">
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Category</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Month</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Full day leave</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Half day leave</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Paid/Unpaid Rule</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Notice Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.leavesPolicy.map((leave, idx) => (
                                <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.category}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.month}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.fulldayLeave}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.halfdayLeave}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.PaidUnpaidRule}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{leave.noticePeriod}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Work from home */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl  overflow-auto transition-all duration-300   shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    
                        dark:shadow-none 
                        dark:hover:shadow-none hover:border-red-700 dark:hover:border-none">
                    <div className="flex  flex-col sm:flex-row justify-between" >
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-red-800 dark:text-slate-200">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Work From Home
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>
                    {employee.remoteWork.length === 0 ? (
                        <p className="text-md mt-2">No remote work records yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-red-50 text-red-800 dark:text-slate-200 dark:bg-slate-700 border border-red-100">
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">From Date</th>
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">To Date</th>
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">Days</th>
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">Reason</th>
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">Status</th>
                                    <th className="border border-red-100  dark:border-slate-700 px-2 py-1">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyFilteredWFH.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.from}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.to}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.days}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.reason}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.status}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.approvedBy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {/* Extra Working Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl  shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    
                    dark:shadow-none 
                    dark:hover:shadow-none overflow-auto">
                    <div className="flex  flex-col sm:flex-row justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-red-800 dark:text-slate-200">
                            <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Extra Working Hours
                        </h3>
                        {/* Monthly Filter */}
                        <div className="mt-2">

                            <DateFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                        </div>
                    </div>
                    {employee.extraWorkingHours.length === 0 ? (
                        <p className="text-md mt-2">No extra working record yet. </p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-red-50 text-red-800 dark:text-slate-200 dark:bg-slate-700">
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Date</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">In Time</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Out Time</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Total Hours</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Working Place</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Reason</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Approved By</th>
                                    <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Compensation Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyFilteredExtrawork.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.date}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.inTime}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.outTime}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.totalHours}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.workingPlace}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.reason}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.approvedBy}</td>
                                        <td className="border border-red-100 dark:border-slate-700 px-2 py-1">{work.compensationType}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {/* Salary Details */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl  shadow-md 
                shadow-red-500/20 
                hover:shadow-red-500/20
                
                dark:shadow-none 
                dark:hover:shadow-none overflow-auto">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-red-800 dark:text-slate-200">
                        <ClipboardList size={20} className="text-red-700 dark:text-red-600" /> Salary Details
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-red-50 text-red-800 dark:text-slate-200 dark:bg-slate-700">
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Basic</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">HRA</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Allowance</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Deductions</th>
                                <th className="border border-red-100 dark:border-slate-700 px-2 py-1">Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.salary.map((salary, idx) => (
                                <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800  transition-all duration-300">
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1 text-center">{salary.basic}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1 text-center">{salary.hra}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1 text-center">{salary.allowance}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1 text-center">{salary.deductions}</td>
                                    <td className="border border-red-100 dark:border-slate-700 px-2 py-1 text-center">{salary.net}</td>
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