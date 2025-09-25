import { PencilLine, Trash, LayoutGrid, SlidersHorizontal, ArrowDownWideNarrow, PlusSquare, HomeIcon } from "lucide-react";
import { Footer } from "@/layouts/footer";
import { allEmployees } from "@/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState(allEmployees);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Handle Add Employee button
    const handleAdd = () => {
        setSelectedEmployee(null); // empty form
        setIsOpen(true);
    };

    // Handle Edit Employee button
    const handleEdit = (emp) => {
        setSelectedEmployee(emp); // prefill form
        setIsOpen(true);
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const newEmp = {
            number: selectedEmployee ? selectedEmployee.number : employees.length + 1,
            name: form.get("name"),
            description: form.get("description"),
            teamLeader: form.get("teamLeader"),
            position: form.get("position"),
            department: form.get("department"),
            joiningDate: form.get("joiningDate"),
            status: form.get("status"),
            image: selectedEmployee?.image || "https://via.placeholder.com/50"
        };

        if (selectedEmployee) {
            // update existing
            setEmployees(
                employees.map((emp) => (emp.number === selectedEmployee.number ? newEmp : emp))
            );
        } else {
            // add new
            setEmployees([...employees, newEmp]);
        }
        setIsOpen(false);
    };

    return (
        <div className="w-full mx-auto p-2 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex flex-row sm:p-4 items-center justify-between mb-6 ">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Employees</h2>
                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-slate-900 dark:text-slate-200 hover:underline">
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Employees</li>
                    </ul>
                </div>

                {/* Add Employee */}
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 px-2 sm:px-4 py-2 border rounded-lg bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900"
                >
                    <PlusSquare size={18} />
                    <span>Add Employee</span>
                </button>
            </div>

            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Team Manager</th>
                            <th className="table-head">Email ID</th>
                            <th className="table-head">Mobile No.</th>
                            <th className="table-head">Joining Date</th>
                            <th className="table-head">Employment Type</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {employees.map((Employee) => (
                            <tr key={Employee.number} className="table-row">
                                <td className="table-cell">{Employee.number}</td>
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img src={Employee.image} alt={Employee.name} className="size-14 rounded-lg object-cover" />
                                        <div className="flex flex-col">
                                            <p>{Employee.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {Employee.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{Employee.teamLeader}</td>
                                <td className="table-cell">{Employee.position}</td>
                                <td className="table-cell">{Employee.department}</td>
                                <td className="table-cell">{Employee.joiningDate}</td>
                                <td className="table-cell">{Employee.status}</td>
                                <td className="table-cell">
                                    <div className="flex items-center gap-x-4">
                                        <button onClick={() => handleEdit(Employee)} className="text-blue-500 dark:text-blue-600">
                                            <PencilLine size={20} />
                                        </button>
                                        <button className="text-red-500">
                                            <Trash size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Popup Form */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">
                            {selectedEmployee ? "Edit Employee" : "Add Employee"}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input name="name" placeholder="Name" defaultValue={selectedEmployee?.name || ""} className="w-full p-2 border rounded" />
                            <input name="description" placeholder="Description" defaultValue={selectedEmployee?.description || ""} className="w-full p-2 border rounded" />
                            <input name="teamLeader" placeholder="Team Manager" defaultValue={selectedEmployee?.teamLeader || ""} className="w-full p-2 border rounded" />
                            <input name="position" placeholder="Email ID" defaultValue={selectedEmployee?.position || ""} className="w-full p-2 border rounded" />
                            <input name="department" placeholder="Mobile No." defaultValue={selectedEmployee?.department || ""} className="w-full p-2 border rounded" />
                            <input type="date" name="joiningDate" defaultValue={selectedEmployee?.joiningDate || ""} className="w-full p-2 border rounded" />
                            <select name="status" defaultValue={selectedEmployee?.status || ""} className="w-full p-2 border rounded">
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>

                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Employees;
