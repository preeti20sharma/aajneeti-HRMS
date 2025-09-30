import { PencilLine, Trash, PlusSquare, HomeIcon, SlidersHorizontal, ArrowDownWideNarrow } from "lucide-react";
import { Footer } from "@/layouts/footer";
import { allEmployees } from "@/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState(allEmployees);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [preview, setPreview] = useState(null);
    const labelClasses = "text-sm font-medium text-slate-700 dark:text-slate-200";

    // Handle Add Employee button
    const handleAdd = () => {
        setSelectedEmployee(null);
        setPreview(null);
        setIsOpen(true);
    };

    // Handle Edit Employee button
    const handleEdit = (emp) => {
        setSelectedEmployee(emp);
        setPreview(emp.image || null);
        setIsOpen(true);
    };

    // Handle Image Change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    // Cleanup object URL
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const file = form.get("image");

        let imageUrl = selectedEmployee?.image || "";
        if (file && file.size > 0) {
            imageUrl = preview; // use uploaded preview
        }

        const newEmp = {
            number: form.get("id") || (selectedEmployee ? selectedEmployee.number : employees.length + 1),
            name: form.get("name"),
            description: form.get("description"),
            teamLeader: form.get("teamLeader"),
            email: form.get("email"),
            phone: form.get("phone"),
            joiningDate: form.get("joiningDate"),
            department: form.get("department"),
            designation: form.get("designation"),
            experience: form.get("experience"),
            status: form.get("status"),
            image: imageUrl
        };

        if (selectedEmployee) {
            setEmployees(
                employees.map((emp) => (emp.number === selectedEmployee.number ? newEmp : emp))
            );
        } else {
            setEmployees([...employees, newEmp]);
        }

        setIsOpen(false);
        setPreview(null);
    };

    return (
        <div className="w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
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
            {/* Action Buttons */}
            <div className="flex items-center gap-3 pb-4 mt-4 justify-end sm:px-4">
                {/* Filter Select */}
                <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white 
                              dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                    <SlidersHorizontal size={18} />
                    <select
                        className="bg-white 
                              dark:bg-slate-800 text-slate-900 dark:text-slate-200  focus:outline-none text-sm"
                        defaultValue=""
                    >
                        <option value="" disabled>Filter</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="invited">Invited</option>
                    </select>
                </div>

                {/* Sort Select */}
                <div className="flex items-center  gap-2 px-3 py-2 border rounded-lg bg-white 
                              dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                    <ArrowDownWideNarrow size={18} />
                    <select
                        className="bg-white 
                              dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:outline-none text-sm"
                        defaultValue=""
                    >
                        <option value="" disabled>Sort by</option>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="az">A–Z</option>
                        <option value="za">Z–A</option>
                    </select>
                </div>
            </div>


            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Team Manager</th>
                            <th className="table-head">Department</th>
                            <th className="table-head">Designation</th>
                            <th className="table-head">Employment Type</th>
                            <th className="table-head">Experience</th>
                            <th className="table-head">Email ID</th>
                            <th className="table-head">Mobile No.</th>
                            <th className="table-head">Joining Date</th>
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
                                <td className="table-cell text-center">{Employee.department}</td>
                                <td className="table-cell">{Employee.position}</td>
                                <td className="table-cell">{Employee.status}</td>
                                <td className="table-cell">{Employee.experience}</td>
                                <td className="table-cell">{Employee.email}</td>
                                <td className="table-cell">{Employee.phone}</td>
                                <td className="table-cell">{Employee.joiningDate}</td>
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
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-auto">
                    <div className="bg-white dark:bg-slate-800 px-6 py-2 rounded-lg relative my-8 mx-auto shadow-lg w-full max-w-xl  ">
                        <h2 className="text-xl font-bold mb-4">
                            {selectedEmployee ? "Edit Employee" : "Add Employee"}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className={labelClasses}>Employee Name</label>
                                    <input name="name" placeholder="Name" defaultValue={selectedEmployee?.name || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Employee ID</label>
                                    <input name="id" placeholder="Employee ID" defaultValue={selectedEmployee?.number || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Employee Type</label>
                                    <input name="status" placeholder="Employment Type" defaultValue={selectedEmployee?.status || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className={labelClasses}>Experience</label>
                                    <input name="experience" placeholder="Experience" defaultValue={selectedEmployee?.experience || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Employee Designation</label>
                                    <input name="description" placeholder="Designation" defaultValue={selectedEmployee?.description || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Department</label>
                                    <input name="department" placeholder="Department" defaultValue={selectedEmployee?.department || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <div>
                                    <label className={labelClasses}>Team Manager</label>
                                    <input name="teamLeader" placeholder="Team Manager" defaultValue={selectedEmployee?.teamLeader || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email ID</label>
                                    <input name="email" placeholder="Email ID" defaultValue={selectedEmployee?.email || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                                <div>
                                    <label className={labelClasses}>Mobile No.</label>
                                    <input name="phone" placeholder="Mobile No." defaultValue={selectedEmployee?.phone || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <div>
                                    <label className={labelClasses}>Joining Date</label>
                                    <input type="date" name="joiningDate" defaultValue={selectedEmployee?.joiningDate || ""}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100" />
                                </div>
                            </div>

                            <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">
                                Upload Profile
                            </h2>
                            <div className="flex flex-col items-center md:items-start">
                                <label className={`${labelClasses} mb-1`}>Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="block text-sm text-slate-700 dark:text-slate-200"
                                />
                                {preview && (
                                    <img src={preview} alt="Preview" className="mt-2 w-20 h-20 rounded-lg object-cover" />
                                )}
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">JPG or PNG, max 5MB</p>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-slate-800 bg-gray-300 rounded">
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
