import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    PlusSquare,
    Pencil,
    Trash,
    Calendar,
    X,
    File
} from "lucide-react";


const Policy = () => {
    const [filterOpen, setFilterOpen] = useState();
    const [selectedFilter, setSelectedFilter] = useState()
    const [sortByOpen, setsortByOpen] = useState();
    const [selectedsortBy, setSelectedsortBy] = useState();

    // ======== INITIAL achievements DATA =========
    const [achievements, setachievements] = useState([
        {
            id: 1,
            policy: "Leave Policy",
            date: "2025-01-10",
            subject: "Annual Leave Guidelines",
            details: "Employees are entitled to 18 days of paid annual leave per year. Leave requests must be submitted at least 7 days in advance through the HR portal."
        },
        {
            id: 2,
            policy: "Attendance & Punctuality Policy",
            date: "2025-02-05",
            subject: "Office Timing & Attendance Rules",
            details: "Employees must maintain regular attendance and follow official working hours. Three consecutive late arrivals may result in a formal warning."
        },
        {
            id: 3,
            policy: "Code of Conduct",
            date: "2025-03-01",
            subject: "Professional Behaviour",
            details: "All employees are expected to maintain respectful behavior, avoid harassment, and follow ethical business practices at all times."
        },
        {
            id: 4,
            policy: "Work From Home Policy",
            date: "2025-03-15",
            subject: "WFH Eligibility & Guidelines",
            details: "Work-from-home requests will be approved based on job role and performance. Employees must be available online during working hours."
        }
    ]
    );

    // ======== MODAL STATES =========
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    // ======== FORM DATA =========
    const [formData, setFormData] = useState({
        policy: "",
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
                policy: "",
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
            // Update existing Achievement
            setachievements(achievements.map(w => w.id === editing.id ? { ...formData, id: editing.id } : w));
        } else {
            // Add new Achievement
            const newAchievement = {
                ...formData,
                id: achievements.length + 1,


            };
            setachievements([...achievements, newAchievement]);
        }

        setIsOpen(false);
    };

    // ======== DELETE Achievement =========
    const handleDelete = (id) => {
        setachievements(achievements.filter(w => w.id !== id));
    };

    return (
        <div className="w-full mx-auto rounded-2xl bg-slate-50 dark:bg-slate-900 min-h-screen p-2 md:p-4">

            {/* ======= HEADER ======= */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6  pt-4">

                {/* LEFT — Title + Breadcrumb */}
                <div className="flex flex-col">
                    <h2
                        className="text-2xl sm:text-2xl font-bold 
            bg-gradient-to-r from-red-800 to-slate-900 
            bg-clip-text text-transparent animate-gradient-slide
            dark:text-slate-100"
                    >
                        <File
                            size={25}
                            className="inline-block mr-1 text-red-800 dark:text-red-500"
                        />
                        Policy
                    </h2>

                    {/* Breadcrumb */}
                    <ul className="flex items-center text-xs sm:text-sm mt-2">
                        <li>
                            <Link
                                to="/"
                                className="flex items-center text-slate-900 dark:text-slate-200 hover:underline"
                            >
                                <HomeIcon size={14} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Policy</li>
                    </ul>
                </div>

                {/* RIGHT — Add Achievement Button */}
                <button
                    onClick={() => openForm()}
                    className="flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0 
                   gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black 
                   text-slate-200 hover:opacity-90 dark:hover:bg-blue-900"
                >
                    <PlusSquare size={16} />
                    <span className="text-sm">Add Policy</span>
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mt-4 pb-4 px-1 sm:px-4">

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
                {achievements.map((w) => (
                    <div
                        key={w.id}
                        className="bg-white dark:bg-slate-800 border-l-2 border-red-600 rounded-xl shadow-md hover:shadow-xl transition p-4"
                    >
                        <div className="w-full text-left  sm:justify-between gap-4">

                            {/* LEFT SIDE – IMAGE + policy NAME */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <div className="flex items-center gap-3 ">
                                    <div>
                                        <h3 className=" text-xl font-semibold text-red-700 dark:text-white">
                                            {w.policy}
                                        </h3>
                                        <p className="text-sm opacity-70 dark:text-white">{w.subject}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4 sm:mt-4">
                                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 flex items-center gap-1">
                                        <Calendar size={14} /> {w.date}</span>
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div className="text-sm mt-4 opacity-90 max-w-full dark:text-white ">
                                {w.details}
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex items-center mt-4 gap-4 justify-start sm:justify-end">
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
                            <h3 className="text-xl font-semibold text-red-800 dark:text-slate-200">
                                {editing ? "Edit Policy" : "Add New Policy"}
                            </h3>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={22} className="text-red-800 dark:text-slate-200" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* policy */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Policy Name
                                </label>
                                <input
                                    type="text"
                                    name="policy"
                                    value={formData.policy}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 text-sm rounded-lg text-slate-800 dark:text-slate-200 bg-red-50 dark:bg-slate-800 border border-red-100 dark:border-slate-700 focus:outline-red-800"
                                />
                            </div>

                            {/* DATE */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Policy Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 mt-1 text-sm rounded-lg text-slate-800 dark:text-slate-200 bg-red-50 dark:bg-slate-800 border border-red-100 dark:border-slate-700 focus:outline-red-800"
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
                                    className="w-full p-2 mt-1 text-sm rounded-lg text-slate-800 dark:text-slate-200 bg-red-50 dark:bg-slate-800 border border-red-100 dark:border-slate-700 focus:outline-red-800"
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
                                    className="w-full p-2 mt-1 text-sm rounded-lg text-slate-800 dark:text-slate-200 bg-red-50 dark:bg-slate-800 border border-red-100 dark:border-slate-700 focus:outline-red-800"
                                ></textarea>
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setEditing(null);
                                    }}
                                    className="px-4 py-2 rounded-lg border border-red-800 dark:border-slate-700 text-red-800 dark:text-slate-200  dark:hover:bg-slate-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black text-white hover:bg-gradient-to-r hover:from-black hover:to-red-800"
                                >
                                    {editing ? "Update Policy" : "Add Policy"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Policy;
