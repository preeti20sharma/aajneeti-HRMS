import { useState } from "react";
import { Clock10, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import profileimage from "@/assets/profile-image.jpg";

const Shift = () => {
    const [employees, setEmployees] = useState([
        {
            id: "EMP001",
            name: "Preeti Sharma",
            designation: "Frontend Developer",
            dept: "Development",
            image: profileimage,
            shift: "",
        },
        {
            id: "EMP002",
            name: "Preeti Sharma",
            designation: "HR Manager",
            dept: "Human Resource",
            image: profileimage,
            shift: "",
        },
        {
            id: "EMP003",
            name: "Preeti Sharma",
            designation: "Account Executive",
            dept: "Accounts",
            image: profileimage,
            shift: "",
        },
    ]);

    const shifts = [
        "9:00 AM - 6:00 PM",
        "10:00 AM - 7:00 PM",
        "11:00 AM - 8:00 PM",
    ];

    const handleShiftChange = (empId, shiftValue) => {
        const updated = employees.map((e) =>
            e.id === empId ? { ...e, shift: shiftValue } : e
        );
        setEmployees(updated);
    };

    return (
        <div className="w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100 ">
            {/* Header */}
            <div className="flex flex-row sm:p-4 items-center justify-between mb-6 ">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Clock10 size={24} className="text-red-600" />
                        <h2 className="sm:text-2xl text-md font-bold">Shift Timing</h2>
                    </div>

                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-slate-900 dark:text-slate-200 hover:underline">
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Shift</li>
                    </ul>
                </div>

            </div>

            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table w-full text-left text-sm">
                    <thead className="table-header 
        bg-gradient-to-r from-red-700 to-black text-white 
        dark:bg-slate-800 dark:text-slate-200
        sticky top-0 z-10 shadow-sm">
                        <tr className=" border-b border-red-100 dark:border-slate-800">
                            <th className="p-3 text-left text-sm font-semibold ">Employee ID</th>
                            <th className="p-3 text-left text-sm font-semibold ">Employee</th>
                            <th className="p-3 text-left text-sm font-semibold ">Department</th>
                            <th className="p-3 text-left text-sm font-semibold ">Shift</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((emp) => (
                            <tr
                                key={emp.id}
                                className="border-b border-red-100 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-slate-700/50"
                            >
                                {/* Employee ID */}
                                <td className="py-2 px-4 text-sm text-slate-800 dark:text-slate-200">{emp.id}</td>

                                {/* Employee Image + Name + Designation */}
                                <td className="py-2 px-4 text-sm">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={emp.image}
                                            alt={emp.name}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{emp.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {emp.designation}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Department */}
                                <td className="py-2 px-4 text-sm text-slate-800 dark:text-slate-200">{emp.dept}</td>

                                {/* Shift Dropdown */}
                                <td className="py-2 px-4">
                                    <select
                                        value={emp.shift}
                                        onChange={(e) => handleShiftChange(emp.id, e.target.value)}
                                        className="p-2 border rounded-lg bg-white dark:bg-slate-800 
                               border-red-100 dark:border-slate-600 
                               text-sm text-slate-700 dark:text-slate-200
                               focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                    >
                                        <option value="">Select Shift</option>
                                        {shifts.map((s, index) => (
                                            <option key={index} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Shift;
