import {
    HomeIcon,
    PencilLine,
    Trash,
    PlusSquare,
    X,
    Building2
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Department = () => {
    const [departments, setDepartments] = useState([
        { id: 1, name: "Operation", head: "Rishabh pandey", employees: 12, created: "2023-05-10" },
        { id: 2, name: "Sales", head: "Anish sehgal", employees: 8, created: "2023-08-15" },
        { id: 3, name: "Content", head: "Ruchi Shrimalli", employees: 2, created: "2024-02-21" },
        { id: 4, name: "SEO", head: "Priya Singh", employees: 2, created: "2024-04-18" },
        { id: 5, name: "IT", head: "Prashant", employees: 4, created: "2024-04-18" },
        { id: 6, name: "HR", head: "Nivedita", employees: 1, created: "2024-06-01" },
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        head: "",
        employees: "",
        created: "",
    });

    // Open modal for add or edit
    const openForm = (item = null) => {
        if (item) {
            setEditing(item);
            setFormData(item);
        } else {
            setEditing(null);
            setFormData({
                name: "",
                head: "",
                employees: "",
                created: "",
            });
        }
        setIsOpen(true);
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editing) {
            // Update department
            setDepartments(
                departments.map((d) =>
                    d.id === editing.id ? { ...formData, id: d.id } : d
                )
            );
        } else {
            // Add new department
            const newDept = {
                ...formData,
                id: departments.length + 1,
            };
            setDepartments([...departments, newDept]);
        }

        setIsOpen(false);
    };

    // Delete department
    const handleDelete = (id) => {
        setDepartments(departments.filter((d) => d.id !== id));
    };

    return (
        <div className="w-full mx-auto rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">

            {/* Header */}
            <div className="flex items-center justify-between mb-8 sm:px-4 px-1 pt-6">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Building2 size={24} className="text-red-600" />
                        <h2 className="sm:text-2xl text-md font-bold">Department</h2>
                    </div>
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
                        <li className="text-slate-600 dark:text-slate-50">Department</li>
                    </ul>
                </div>

                {/* Add Department Button */}
                <button
                    onClick={() => openForm()}
                    className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-black text-white px-4 py-2 rounded-lg"
                >
                    <PlusSquare size={18} /> Add Department
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="sticky top-0 bg-gradient-to-r from-red-700 to-black text-white">
                        <tr className="text-xs uppercase">
                            <th className="px-4 py-2 text-left">Department</th>
                            <th className="px-4 py-2 text-left">Head of Dept.</th>
                            <th className="px-4 py-2 text-center">Employees</th>
                            <th className="px-4 py-2 text-center">Created</th>
                            <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {departments.map((d) => (
                            <tr
                                key={d.id}
                                className=" border-b border-red-100 dark:border-slate-800 hover:bg-red-100 dark:hover:bg-slate-700 transition text-md"
                            >
                                <td className="px-4 py-2 font-bold text-red-700 dark:text-slate-200 ">{d.name}</td>
                                <td className="px-4 py-2">{d.head}</td>
                                <td className="px-4 py-2 text-center">{d.employees}</td>
                                <td className="px-4 py-2 text-center">{d.created}</td>
                                <td className="px-4 py-2">
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() => openForm(d)}
                                            className="text-blue-500 hover:scale-110"
                                        >
                                            <PencilLine size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(d.id)}
                                            className="text-red-500 hover:scale-110"
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
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-md shadow-xl">
                        <div className="flex justify-between mb-4">
                            <h3 className="text-xl font-bold">
                                {editing ? "Edit Department" : "Add New Department"}
                            </h3>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={22} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium">Department Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 border dark:border-slate-700 rounded p-2 bg-white dark:bg-slate-800"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Head of Department</label>
                                <input
                                    type="text"
                                    name="head"
                                    value={formData.head}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 border dark:border-slate-700 rounded p-2 bg-white dark:bg-slate-800"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Total Employees</label>
                                <input
                                    type="number"
                                    name="employees"
                                    value={formData.employees}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 border dark:border-slate-700 rounded p-2 bg-white dark:bg-slate-800"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Created Date</label>
                                <input
                                    type="date"
                                    name="created"
                                    value={formData.created}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 border dark:border-slate-700 rounded p-2 bg-white dark:bg-slate-800"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-red-700 to-black text-white py-2 rounded-lg"
                            >
                                {editing ? "Update Department" : "Add Department"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Department;
