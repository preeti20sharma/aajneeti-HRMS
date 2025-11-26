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
            { date: "25-09-2025", type: "Sick", duration: "Full leave", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "04-08-2025", type: "Casual", duration: "Short leave", days: "1", status: "Rejected", approvedBy: "HR" },
            { date: "23-09-2025", type: "Sick", duration: "Full leave", days: "1", status: "Approved", approvedBy: "Manager" },
            { date: "08-08-2025", type: "Sick", duration: "Half leave", days: "1", status: "Approved", approvedBy: "Manager" },

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

    const leavesStatus = {
        total: employee.leavesTaken.length,
        fullLeave: employee.leavesTaken.filter(l => l.duration === "Full Day").length,
        halfLeave: employee.leavesTaken.filter(l => l.duration === "Half Day").length,
        workingDays: 30 - employee.leavesTaken.length,
    };

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
    employee.leavesTaken.forEach(l => {
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

        // ★ 1: Default Saturday = WFH
        if (!remark && date.getDay() === 6) {
            remark = "WFH";
        }

        // ★ 2: Compensation Saturday only if:
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
            <div>
                <h2 className="text-2xl font-bold">Employee Dashboard</h2>
                <p className="mt-2">Welcome back! {employee.name}</p>
            </div>

            {/* Employee Info + Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Employee Details */}
                <div className="
                        bg-white dark:bg-slate-800
                        sm:p-6 p-3
                        rounded-2xl 
                        dark:border-slate-700
                        shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    
                    dark:shadow-none 
                    dark:hover:shadow-none
                        transition-all duration-300

                        hover:shadow-md 
                        dark:hover:border-slate-600 
                    ">

                    {/* TOP SECTION */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={employee.image} alt={employee.name} className="
                    size-16 rounded-xl object-cover shadow-md 
                    border border-red-700/40 
                    dark:border-slate-700
                " />
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                                    {employee.name}
                                </h3>
                                <p className="
                    text-slate-600 dark:text-slate-400
                ">
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

                    {/* TABLE */}
                    <table className="w-full text-md">
                        <tbody>
                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Employee ID</td>
                                <td className="px-4 py-2">{employee.empId}</td>
                            </tr>

                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Department</td>
                                <td className="px-4 py-2">{employee.department}</td>
                            </tr>

                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Designation</td>
                                <td className="px-4 py-2">{employee.designation}</td>
                            </tr>

                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Email</td>
                                <td className="px-4 py-2">{employee.email}</td>
                            </tr>

                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition ">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Phone</td>
                                <td className="px-4 py-2">{employee.phone}</td>
                            </tr>

                            <tr className="
                border-b border-red-100 dark:border-slate-700
                hover:bg-red-50/70 dark:hover:bg-slate-700/40 transition">
                                <td className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-300">Joining Date</td>
                                <td className="px-4 py-2">{employee.joiningDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/*  UPDATED DYNAMIC CALENDAR */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md 
                        shadow-red-500/20 hover:shadow-red-500/20
                        dark:shadow-none dark:hover:shadow-none">

                    {/* Month Navigation */}
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setCurrentMonth(new Date(year, month - 1))}
                            className="px-3 py-1 bg-red-700 text-white rounded-md"
                        >
                            Prev
                        </button>

                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <CalendarDays size={20} />
                            {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                        </h3>

                        <button
                            onClick={() => setCurrentMonth(new Date(year, month + 1))}
                            className="px-3 py-1 bg-red-700 text-white rounded-md"
                        >
                            Next
                        </button>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 gap-1 text-md font-semibold text-center">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>

                    {/* Dates + Remarks */}
                    <div className="grid grid-cols-7 gap-1 mt-3 text-md">

                        {calendarDates.map((item, index) => {
                            if (!item) return <div key={index}></div>;

                            const { date, remark } = item;

                            const isToday =
                                date.getDate() === new Date().getDate() &&
                                date.getMonth() === new Date().getMonth() &&
                                date.getFullYear() === new Date().getFullYear();

                            return (
                                <div
                                    key={date.toISOString()}
                                    className={`h-14 flex flex-col items-center justify-center rounded text-sm
                        ${getRemarkColor(remark)}
                        ${isToday ? "ring-2 ring-red-900" : ""}
                    `}
                                >
                                    {/* Date Number */}
                                    <span>{date.getDate()}</span>

                                    {/* FL / SL / WFH */}
                                    {remark && (
                                        <span className="text-[10px] font-bold">
                                            {remark}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Leaves Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Leaves Utilized */}
                <div className="
                    bg-white lg:col-span-2 
                    px-4 sm:px-6 py-6 
                    rounded-xl  
                    overflow-auto  transition-all duration-300   shadow-md 
                  shadow-red-500/20 
                  hover:shadow-red-500/20
                    dark:shadow-none 
                    dark:hover:shadow-none hover:border-red-700 dark:hover:border-none
                    dark:bg-slate-800">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-900 dark:text-slate-50">
                        <ClipboardList size={20} className="text-red-700 dark:text-slate-50" />
                        Leaves Utilized
                    </h3>


                    {employee.leavesTaken.length === 0 ? (
                        <p className="text-md mt-2 text-slate-700 dark:text-slate-300">No leaves taken yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-4 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="
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
                                {employee.leavesTaken.map((leave, idx) => (
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
                <div className="bg-white lg:col-span-1 dark:bg-slate-800 p-6 rounded-xl  shadow-md 
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
                </div>
            </div>


            {/* Availability Section */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div
                    className="
      bg-white dark:bg-slate-800
      p-6 rounded-xl overflow-auto
      transition-all duration-300
      shadow-md shadow-red-500/20 hover:shadow-red-600/30
      border border-transparent dark:shadow-none
       
    "
                >
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-red-700 dark:text-white mb-5">
                        <ClipboardList size={20} /> Availability Overview
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                        {/* Full Leave */}
                        <div className="
        p-4 rounded-xl
        bg-gradient-to-br from-black to-red-600
        text-white 
        transition-all duration-300
      ">
                            <h4 className="text-sm font-medium">Full Leave</h4>
                            <p className="text-2xl font-bold mt-1">03</p>
                            <p className="text-xs text-red-100/80 mt-1">Available to Use</p>
                        </div>

                        {/* Half Leave */}
                        <div className="
        p-4 rounded-xl
       bg-gradient-to-br from-black to-red-600 text-white
        
        dark:border-slate-600
         hover:shadow-none
        transition-all duration-300
      ">
                            <h4 className="text-sm font-medium ">Half Leaves</h4>
                            <p className="text-2xl font-bold mt-1">02</p>
                            <p className="text-xs text-red-100/80  mt-1">Available to Use</p>
                        </div>


                        {/* Work From Home */}
                        <div className="
        p-4 rounded-xl
        bg-gradient-to-br from-black to-red-600
        text-white dark:bg-slate-700
        transition-all duration-300
      ">
                            <h4 className="text-sm font-medium">Work From Home</h4>
                            <p className="text-2xl font-bold mt-1">06</p>
                            <p className="text-xs text-red-100/80 mt-1">Available to Use</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* short leave availability */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div
                    className="
      bg-white dark:bg-slate-800
      p-6 rounded-xl overflow-auto
      transition-all duration-300
      shadow-md shadow-red-500/20 hover:shadow-red-600/30
      border border-transparent dark:shadow-none
       dark:hover:shadow-none
    "
                >
                    <h3 className="text-lg font-semibold flex items-center gap-2  text-red-700 dark:text-white mb-5">
                        <ClipboardList size={20} /> Short Leave Overview
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">


                        {/* short leave Used */}
                        <div className="
        p-4 rounded-xl
         bg-gradient-to-br from-black to-red-600 text-white
        dark:bg-slate-800
        dark:border-slate-600
        hover:shadow-lg dark:hover:shadow-none
        transition-all duration-300
      ">
                            <h4 className="text-sm font-medium">Short Leaves already taken</h4>
                            <p className="text-2xl font-bold  mt-1">02</p>
                            <p className="text-xs text-red-100/80  mt-1">Already Used</p>
                        </div>
                        {/* Short Leave available */}
                        <div className="
        p-4 rounded-xl
        bg-gradient-to-br from-black to-red-600 text-white
        transition-all duration-300
      ">
                            <h4 className="text-sm font-medium">Short Leaves available</h4>
                            <p className="text-2xl font-bold  mt-1">03</p>
                            <p className="text-xs text-red-100/80 mt-1">Available to Use</p>
                        </div>

                        {/* Work From Home */}
                        {/* <div className="
        p-4 rounded-xl
        bg-gradient-to-br from-black to-red-600
        text-white
        border border-red-500
        hover:shadow-lg hover:shadow-red-600/40
        transition-all duration-300
      ">
                        <h4 className="text-sm font-medium">Work From Home</h4>
                        <p className="text-2xl font-bold mt-1">06</p>
                        <p className="text-xs text-red-100/80 mt-1">Available to Use</p>
                    </div> */}


                    </div>
                </div>
            </div>

            {/* leave policy */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl overflow-auto  transition-all duration-300  shadow-md 
  shadow-red-500/20 
  hover:shadow-red-500/20
  
  dark:shadow-none 
  dark:hover:shadow-none hover:border-red-700 dark:hover:border-none">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Leaves Policy
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-red-50 dark:bg-slate-700  transition-all duration-300">
                                <th className="border border-red-100 px-2 py-1">Category</th>
                                <th className="border border-red-100 px-2 py-1">Month</th>
                                <th className="border border-red-100 px-2 py-1">Full day leave</th>
                                <th className="border border-red-100 px-2 py-1">Half day leave</th>
                                <th className="border border-red-100 px-2 py-1">Paid/Unpaid Rule</th>
                                <th className="border border-red-100 px-2 py-1">Notice Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.leavesPolicy.map((leave, idx) => (
                                <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                    <td className="border border-red-100 px-2 py-1">{leave.category}</td>
                                    <td className="border border-red-100 px-2 py-1">{leave.month}</td>
                                    <td className="border border-red-100 px-2 py-1">{leave.fulldayLeave}</td>
                                    <td className="border border-red-100 px-2 py-1">{leave.halfdayLeave}</td>
                                    <td className="border border-red-100 px-2 py-1">{leave.PaidUnpaidRule}</td>
                                    <td className="border border-red-100 px-2 py-1">{leave.noticePeriod}</td>
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
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Work From Home
                    </h3>
                    {employee.remoteWork.length === 0 ? (
                        <p className="text-md mt-2">No remote work records yet.</p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-red-50 dark:bg-slate-700 border border-red-100">
                                    <th className="border border-red-100 px-2 py-1">From Date</th>
                                    <th className="border border-red-100 px-2 py-1">To Date</th>
                                    <th className="border border-red-100 px-2 py-1">Days</th>
                                    <th className="border border-red-100 px-2 py-1">Reason</th>
                                    <th className="border border-red-100 px-2 py-1">Status</th>
                                    <th className="border border-red-100 px-2 py-1">Approved By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.remoteWork.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                        <td className="border border-red-100 px-2 py-1">{work.from}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.to}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.days}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.reason}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.status}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.approvedBy}</td>
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
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Extra Working Hours
                    </h3>
                    {employee.extraWorkingHours.length === 0 ? (
                        <p className="text-md mt-2">No extra working record yet. </p>
                    ) : (
                        <table className="w-full text-md border-collapse mt-3">
                            <thead>
                                <tr className="bg-red-50 dark:bg-slate-700">
                                    <th className="border border-red-100 px-2 py-1">Date</th>
                                    <th className="border border-red-100 px-2 py-1">In Time</th>
                                    <th className="border border-red-100 px-2 py-1">Out Time</th>
                                    <th className="border border-red-100 px-2 py-1">Total Hours</th>
                                    <th className="border border-red-100 px-2 py-1">Working Place</th>
                                    <th className="border border-red-100 px-2 py-1">Reason</th>
                                    <th className="border border-red-100 px-2 py-1">Approved By</th>
                                    <th className="border border-red-100 px-2 py-1">Compensation Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.extraWorkingHours.map((work, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800 text-center  transition-all duration-300">
                                        <td className="border border-red-100 px-2 py-1">{work.date}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.inTime}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.outTime}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.totalHours}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.workingPlace}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.reason}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.approvedBy}</td>
                                        <td className="border border-red-100 px-2 py-1">{work.compensationType}</td>
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
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClipboardList size={20} /> Salary Details
                    </h3>
                    <table className="w-full text-md border-collapse mt-3">
                        <thead>
                            <tr className="bg-red-50 dark:bg-slate-700">
                                <th className="border border-red-100 px-2 py-1">Basic</th>
                                <th className="border border-red-100 px-2 py-1">HRA</th>
                                <th className="border border-red-100 px-2 py-1">Allowance</th>
                                <th className="border border-red-100 px-2 py-1">Deductions</th>
                                <th className="border border-red-100 px-2 py-1">Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.salary.map((salary, idx) => (
                                <tr key={idx} className="hover:bg-red-50 dark:hover:bg-slate-800  transition-all duration-300">
                                    <td className="border border-red-100 px-2 py-1 text-center">{salary.basic}</td>
                                    <td className="border border-red-100 px-2 py-1 text-center">{salary.hra}</td>
                                    <td className="border border-red-100 px-2 py-1 text-center">{salary.allowance}</td>
                                    <td className="border border-red-100 px-2 py-1 text-center">{salary.deductions}</td>
                                    <td className="border border-red-100 px-2 py-1 text-center">{salary.net}</td>
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