import { IndianRupee, PencilLine, Trash } from "lucide-react";

const employees = [
    {
        id: 1,
        name: "John Doe",
        empId: "EMP001",
        department: "Development",
        designation: "React Developer",
        basic: 30000,
        hra: 15000,
        allowance: 5000,
        deductions: 2000,
        net: 48000,
    },
    {
        id: 2,
        name: "Jane Smith",
        empId: "EMP002",
        department: "Design",
        designation: "UI/UX Designer",
        basic: 28000,
        hra: 12000,
        allowance: 4000,
        deductions: 2500,
        net: 41500,
    },
];

const EmployeeSalary = () => {
    return (
        <div className="w-full mx-auto p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <IndianRupee size={28} className="text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold">Employee Salary Details</h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700">
                <table className="min-w-full border-collapse">
                    <thead className="bg-slate-200 dark:bg-slate-800">
                        <tr className="text-xs uppercase text-slate-700 dark:text-slate-300">
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-left">Name</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2">Emp ID</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2">Department</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2">Designation</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">Basic</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">HRA</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">Allowance</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">Deductions</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">Net</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr
                                key={emp.id}
                                className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                            >
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 font-medium">{emp.name}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">{emp.empId}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">{emp.department}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">{emp.designation}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">₹{emp.basic}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">₹{emp.hra}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">₹{emp.allowance}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">₹{emp.deductions}</td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right font-semibold text-green-600 dark:text-green-400">
                                    ₹{emp.net}
                                </td>
                                <td className="border border-slate-300 dark:border-slate-700 px-3 py-2">
                                    <div className="flex justify-center gap-3">
                                        <button className="text-blue-500 dark:text-blue-400 hover:scale-110 transition">
                                            <PencilLine size={18} />
                                        </button>
                                        <button className="text-red-500 hover:scale-110 transition">
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeSalary;
