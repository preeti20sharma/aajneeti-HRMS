import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    PlusSquare,
    Pencil,
    Trash,
    Bell,
    Calendar,
    X
} from "lucide-react";
import ProfileImage from "@/assets/profile-image.jpg";


const Warnings = () => {
    const [filterOpen, setFilterOpen] = useState();
    const [selectedFilter, setSelectedFilter] = useState()
    const [sortByOpen, setsortByOpen] = useState();
    const [selectedsortBy, setSelectedsortBy] = useState();

    // ======== INITIAL WARNINGS DATA =========
    const [warnings, setWarnings] = useState([
        {
            id: 1,
            employee: "Preeti sharma",
            profile: ProfileImage,
            date: "2025-01-10",
            subject: "Late Attendance",
            details: "Employee reported late for duty 3 consecutive days."
        },
        {
            id: 2,
            employee: "Priya Singh",
            profile: ProfileImage,
            date: "2025-02-05",
            subject: "Miscommunication",
            details: "Employee miscommunicated project updates to client.Employee miscommunicated project updates to client.Employee miscommunicated project updates to client."
        }
    ]);

    // ======== MODAL STATES =========
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    // ======== FORM DATA =========
    const [formData, setFormData] = useState({
        employee: "",
        profile: "",
        date: "",
        subject: "",
        details: ""
    });

    // ======== OPEN MODAL FOR ADD OR EDIT =========
    const openForm = (item = null) => {
        if (item) {
            setEditing(item);
            setFormData(item);
        } else {
            setEditing(null);
            setFormData({
                employee: "",
                profile: "",
                date: "",
                subject: "",
                details: ""
            });
        }
        setIsOpen(true);
    };

    // ======== HANDLE INPUT CHANGE =========
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // ======== SUBMIT FORM =========
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editing) {
            // Update existing warning
            setWarnings(warnings.map(w => w.id === editing.id ? { ...formData, id: editing.id } : w));
        } else {
            // Add new warning
            const newWarning = {
                ...formData,
                id: warnings.length + 1,
                profile:
                    formData.profile || ProfileImage

            };
            setWarnings([...warnings, newWarning]);
        }

        setIsOpen(false);
    };

    // ======== DELETE WARNING =========
    const handleDelete = (id) => {
        setWarnings(warnings.filter(w => w.id !== id));
    };

    return (
        <div className="w-full mx-auto rounded-2xl bg-slate-50 dark:bg-slate-900 min-h-screen p-2 md:p-4">

            {/* ======= HEADER ======= */}
            <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-between mb-6  ">
                <div className="flex flex-col">

                    <h2 className="
           text-lg sm:text-2xl font-bold dark:text-slate-200
        ">
                        <span>
                            <Bell size={25} className="inline-block sm:mr-1 text-red-600 dark:text-red-600" />
                        </span> Warnings
                    </h2>

                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-slate-900 dark:text-slate-200 hover:underline">
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Warnings</li>
                    </ul>
                </div>
                {/* Add Employee */}
                <button onClick={() => openForm()} className="flex justify-center w-full sm:w-auto  items-center gap-2 px-2 mt-3 sm:mt-0 sm:px-2 py-2  rounded-lg bg-gradient-to-r from-red-800 to-black  text-slate-200   hover:bg-slate-100 dark:hover:bg-blue-900">
                    <PlusSquare size={16} />
                    <span className="text-sm">Add warnings</span>
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mt-4 pb-4 px-2 sm:px-4">

                {/* FILTER DROPDOWN */}
                <div className="relative w-full sm:w-auto flex items-center border rounded-md px-2 py-2 text-sm
        bg-white text-red-800 dark:bg-slate-800 dark:text-slate-200
        border-red-100 dark:border-slate-600">

                    <div className="relative w-full sm:w-40">
                        <div
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="cursor-pointer flex justify-between items-center"
                        >
                            <span>{selectedFilter || "Select status"}</span>
                            <span className="text-xs">▼</span>
                        </div>

                        {filterOpen && (
                            <div className="absolute w-full sm:w-40 mt-3 bg-white dark:bg-slate-800 
                    border border-gray-300 dark:border-slate-600 
                    rounded-md shadow-lg z-20 text-sm">

                                {["Approved", "Rejected", "Pending"].map((opt, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedFilter(opt);
                                            setFilterOpen(false);
                                        }}
                                        className="px-3 py-2 cursor-pointer hover:bg-red-800 hover:text-white 
                                dark:hover:bg-slate-700"
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* SORT DROPDOWN */}
                <div className="relative w-full sm:w-auto flex items-center border rounded-md px-2 py-2 text-sm
        bg-white text-red-800 dark:bg-slate-800 dark:text-slate-200
        border-red-100 dark:border-slate-600">

                    <div className="relative w-full sm:w-40">
                        <div
                            onClick={() => setsortByOpen(!sortByOpen)}
                            className="cursor-pointer flex justify-between items-center"
                        >
                            <span>{selectedsortBy || "Sort By Date"}</span>
                            <span className="text-xs">▼</span>
                        </div>

                        {sortByOpen && (
                            <div className="absolute w-full sm:w-40 mt-3 bg-white dark:bg-slate-800 
                    border border-gray-300 dark:border-slate-600 
                    rounded-md shadow-lg z-20 text-sm">

                                {["Today", "Yesterday", "Last 7 days", "This Month"].map((opt, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedsortBy(opt);
                                            setsortByOpen(false);
                                        }}
                                        className="px-3 py-2 cursor-pointer hover:bg-red-800 hover:text-white 
                                dark:hover:bg-slate-700"
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>



            {/* ======= CARD GRID ======= */}
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                {warnings.map((w) => (
                    <div
                        key={w.id}
                        className="bg-white dark:bg-slate-800 border-l-2 border-red-600 rounded-xl shadow-md hover:shadow-xl transition p-4"
                    >
                        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                            {/* LEFT SIDE – IMAGE + EMPLOYEE NAME */}
                            <div className="flex items-center gap-3 min-w-[180px] sm:min-w-[220px]">
                                <img
                                    src={w.profile}
                                    alt="profile"
                                    className="w-12 h-12 rounded-full object-cover shadow"
                                />

                                <div>
                                    <h3 className="text-base font-semibold text-red-700 dark:text-white">
                                        {w.employee}
                                    </h3>
                                    <p className="text-xs opacity-70 dark:text-white">{w.subject}</p>
                                </div>
                            </div>

                            {/* DATE */}
                            <div className="flex items-center gap-1 text-xs text-slate-800 dark:text-white sm:min-w-[110px]">
                                <Calendar size={14} /> {w.date}
                            </div>

                            {/* DETAILS */}
                            <div className="text-sm opacity-90 max-w-full dark:text-white sm:max-w-[350px]">
                                {w.details}
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex items-center gap-4 justify-start sm:justify-end">
                                <button
                                    onClick={() => openForm(w)}
                                    className="text-blue-500 hover:scale-110 transition"
                                >
                                    <Pencil size={20} />
                                </button>

                                <button
                                    onClick={() => handleDelete(w.id)}
                                    className="text-red-600 hover:scale-110 transition"
                                >
                                    <Trash size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ======= MODAL ======= */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn">

                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl p-6 border dark:border-none animate-scaleIn">

                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold dark:text-slate-200">
                                {editing ? "Edit Warning" : "Add New Warning"}
                            </h3>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={22} className="dark:text-slate-200" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* EMPLOYEE */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Employee Name
                                </label>
                                <input
                                    type="text"
                                    name="employee"
                                    value={formData.employee}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
                                />
                            </div>

                            {/* DATE */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Warning Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 rounded-lg  bg-slate-100 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                />
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
                                />
                            </div>

                            {/* DETAILS */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setEditing(null);
                                    }}
                                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black text-white hover:bg-gradient-to-r hover:from-black hover:to-red-800"
                                >
                                    {editing ? "Update warning" : "Add warning"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Warnings;
