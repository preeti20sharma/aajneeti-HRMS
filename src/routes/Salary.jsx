import { IndianRupee, PencilLine, Trash, PlusSquare, X, HomeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeSalary = () => {
    const [employees, setEmployees] = useState([
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
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        empId: "",
        department: "",
        designation: "",
        basic: "",
        hra: "",
        allowance: "",
        deductions: "",
    });

    // Open Modal for Add or Edit
    const openForm = (emp = null) => {
        if (emp) {
            setEditingEmployee(emp);
            setFormData(emp);
        } else {
            setEditingEmployee(null);
            setFormData({
                name: "",
                empId: "",
                department: "",
                designation: "",
                basic: "",
                hra: "",
                allowance: "",
                deductions: "",
            });
        }
        setIsOpen(true);
    };

    // Handle Form Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const net =
            Number(formData.basic) +
            Number(formData.hra) +
            Number(formData.allowance) -
            Number(formData.deductions);

        if (editingEmployee) {
            // Update
            setEmployees(
                employees.map((emp) =>
                    emp.id === editingEmployee.id ? { ...formData, id: emp.id, net } : emp
                )
            );
        } else {
            // Add New
            const newEmployee = {
                ...formData,
                id: employees.length + 1,
                net,
            };
            setEmployees([...employees, newEmployee]);
        }

        setIsOpen(false);
    };

    // Delete Employee
    const handleDelete = (id) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    return (
        <div className="w-full mx-auto p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <IndianRupee size={28} className="text-purple-600 dark:text-purple-400" />
                        <h2 className="text-2xl font-bold">Employee Salary Details</h2>
                    </div>
                    <div>
                        <ul className="flex items-center text-sm mt-2">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center text-slate-900 dark:text-slate-200 hover:underline"
                                >
                                    <HomeIcon size={15} />
                                    <span className="pl-2">Home</span>
                                </Link>
                            </li>
                            <li className="px-2 text-slate-500">|</li>
                            <li className="text-slate-600 dark:text-slate-50">Salary</li>
                        </ul>
                    </div>
                </div>
                <button
                    onClick={() => openForm()}
                    className="flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg transition-all"
                >
                    <PlusSquare size={18} /> Add Salary
                </button>
            </div>

            {/* Salary Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700">
                <table className="min-w-full border-collapse">
                    <thead className="bg-slate-200 dark:bg-slate-800">
                        <tr className="text-xs uppercase text-slate-700 dark:text-slate-300">
                            <th className="border px-3 py-2 text-left">Name</th>
                            <th className="border px-3 py-2">Emp ID</th>
                            <th className="border px-3 py-2">Department</th>
                            <th className="border px-3 py-2">Designation</th>
                            <th className="border px-3 py-2 text-right">Basic</th>
                            <th className="border px-3 py-2 text-right">HRA</th>
                            <th className="border px-3 py-2 text-right">Allowance</th>
                            <th className="border px-3 py-2 text-right">Deductions</th>
                            <th className="border px-3 py-2 text-right">Net</th>
                            <th className="border px-3 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr
                                key={emp.id}
                                className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                            >
                                <td className="border px-3 py-2 font-medium">{emp.name}</td>
                                <td className="border px-3 py-2 text-center">{emp.empId}</td>
                                <td className="border px-3 py-2 text-center">{emp.department}</td>
                                <td className="border px-3 py-2 text-center">{emp.designation}</td>
                                <td className="border px-3 py-2 text-right">₹{emp.basic}</td>
                                <td className="border px-3 py-2 text-right">₹{emp.hra}</td>
                                <td className="border px-3 py-2 text-right">₹{emp.allowance}</td>
                                <td className="border px-3 py-2 text-right">₹{emp.deductions}</td>
                                <td className="border px-3 py-2 text-right font-semibold text-purple-600 dark:text-purple-400">
                                    ₹{emp.net}
                                </td>
                                <td className="border px-3 py-2">
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => openForm(emp)}
                                            className="text-blue-500 hover:scale-110 transition"
                                        >
                                            <PencilLine size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(emp.id)}
                                            className="text-red-500 hover:scale-110 transition"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Form */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-lg shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">
                                {editingEmployee ? "Edit Salary Details" : "Add Salary Details"}
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-500 hover:text-red-500"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Employee name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Employee Name"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="empId"
                                        value={formData.empId}
                                        onChange={handleChange}
                                        placeholder="Employee ID"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Department
                                    </label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        placeholder="Department"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Designation
                                    </label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        placeholder="Designation"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Basic Pay
                                    </label>
                                    <input
                                        type="number"
                                        name="basic"
                                        value={formData.basic}
                                        onChange={handleChange}
                                        placeholder="Basic"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        HRA
                                    </label>
                                    <input
                                        type="number"
                                        name="hra"
                                        value={formData.hra}
                                        onChange={handleChange}
                                        placeholder="HRA"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Allowance
                                    </label>
                                    <input
                                        type="number"
                                        name="allowance"
                                        value={formData.allowance}
                                        onChange={handleChange}
                                        placeholder="Allowance"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Deductions
                                    </label>
                                    <input
                                        type="number"
                                        name="deductions"
                                        value={formData.deductions}
                                        onChange={handleChange}
                                        placeholder="Deductions"
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setEditingEmployee(null);
                                    }}
                                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                >
                                    {editingEmployee ? "Update Salary" : "Add Salary Details"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeSalary;
