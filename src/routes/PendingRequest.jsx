import { useState } from "react";
import {
    PlusSquare,
    Pencil,
    Trash,
    Bell,
    Calendar,
    X,
    MessageCircle,
    HomeIcon,
} from "lucide-react";
import ProfileImage from "@/assets/profile-image.jpg";
import { Link } from "react-router-dom";

const PendingRequest = () => {
    const [filterOpen, setFilterOpen] = useState();
    const [selectedFilter, setSelectedFilter] = useState()
    const [sortByOpen, setsortByOpen] = useState();
    const [selectedsortBy, setSelectedsortBy] = useState();

    // ======== INITIAL REQUEST DATA =========
    const [requests, setRequests] = useState([
        {
            id: 1,
            employee: "Preeti Sharma",
            profile: ProfileImage,
            date: "2025-01-10",
            subject: "Leave Request",
            details: "Requesting 2 days leave due to personal work.",
            status: "Pending",
            comment: ""
        },
        {
            id: 2,
            employee: "Priya Singh",
            profile: ProfileImage,
            date: "2025-02-05",
            subject: "Shift Change",
            details: "Requested to change shift from morning to evening.",
            status: "Pending",
            comment: ""
        }
    ]);

    // ======== MODAL STATES =========
    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    // ======== REJECTION COMMENT MODAL =========
    const [commentOpen, setCommentOpen] = useState(false);
    const [rejectID, setRejectID] = useState(null);
    const [rejectComment, setRejectComment] = useState("");

    // ======== FORM DATA =========
    const [formData, setFormData] = useState({
        employee: "",
        profile: "",
        date: "",
        subject: "",
        details: "",
        status: "Pending",
        comment: ""
    });

    // ======== OPEN FORM =========
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
                details: "",
                status: "Pending",
                comment: ""
            });
        }
        setIsOpen(true);
    };

    // ======== HANDLE INPUT CHANGE =========
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ======== SUBMIT FORM (ADD/EDIT) =========
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            setRequests(requests.map(r => r.id === editing.id ? { ...formData, id: editing.id } : r));
        } else {
            const newRequest = {
                ...formData,
                id: requests.length + 1,
                profile: formData.profile || ProfileImage,
            };
            setRequests([...requests, newRequest]);
        }
        setIsOpen(false);
    };

    // ======== DELETE REQUEST =========
    const handleDelete = (id) => {
        setRequests(requests.filter(r => r.id !== id));
    };

    // ======== APPROVE REQUEST =========
    const handleApprove = (id) => {
        setRequests(
            requests.map(r =>
                r.id === id ? { ...r, status: "Approved" } : r
            )
        );
    };

    // ======== OPEN COMMENT MODAL FOR REJECTION =========
    const openRejectModal = (id) => {
        setRejectID(id);
        setRejectComment("");
        setCommentOpen(true);
    };

    // ======== SUBMIT REJECTION COMMENT =========
    const submitComment = () => {
        setRequests(
            requests.map(r =>
                r.id === rejectID
                    ? { ...r, status: "Rejected", comment: rejectComment }
                    : r
            )
        );
        setCommentOpen(false);
    };

    return (
        <div className="w-full mx-auto rounded-2xl bg-slate-50 dark:bg-slate-900 min-h-screen p-4">
            {/* ======= HEADER ======= */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 px-1 sm:px-4 ">

                {/* LEFT — Title */}
                <div className="flex flex-col">

                    <h2 className="
           text-lg sm:text-2xl font-bold dark:text-slate-200
        ">
                        <span>
                            <Bell size={25} className="inline-block sm:mr-1 text-red-600 dark:text-red-600" />
                        </span> Pending Request
                    </h2>

                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-slate-900 dark:text-slate-200 hover:underline">
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Pending Request</li>
                    </ul>
                </div>

                {/* RIGHT — Add Button */}
                <button
                    onClick={() => openForm()}
                    className="flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0 
                   gap-2 px-2 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black text-white"
                >
                    <PlusSquare size={17} />
                    <span>Add Request</span>
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
            <div className="grid grid-cols-1 gap-4">
                {requests.map((w) => (
                    <div key={w.id}
                        className="bg-white dark:bg-slate-800 border-l-2 border-red-600 rounded-xl shadow-md hover:shadow-xl transition p-4">

                        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                            {/* ---- LEFT (Profile + Name) ---- */}
                            <div className="flex items-center gap-3 min-w-[200px]">
                                <img src={w.profile} className="w-12 h-12 rounded-full object-cover shadow" />

                                <div>
                                    <h3 className="text-base font-semibold text-red-800 dark:text-white">
                                        {w.employee}
                                    </h3>
                                    <p className="text-xs opacity-80 dark:text-white">{w.subject}</p>
                                </div>
                            </div>

                            {/* ---- DATE ---- */}
                            <div className="flex items-center gap-1 text-xs dark:text-white">
                                <Calendar size={14} /> {w.date}
                            </div>

                            {/* ---- DETAILS ---- */}
                            <div className="text-sm max-w-[350px] dark:text-white">
                                {w.details}
                            </div>

                            {/* ---- STATUS BADGE ---- */}
                            <span className={`
                                    px-3 py-1 rounded-full text-xs font-semibold
                                    ${w.status === "Pending" && "bg-yellow-200 text-yellow-800"}
                                    ${w.status === "Approved" && "bg-green-200 text-green-800"}
                                    ${w.status === "Rejected" && "bg-red-200 text-red-800"}
                                `}>
                                {w.status}
                            </span>

                            {/* ---- ACTIONS ---- */}
                            <div className="flex items-center gap-4">

                                <button onClick={() => handleApprove(w.id)}
                                    className="text-green-600 hover:scale-110 transition text-xs font-semibold">
                                    Approve
                                </button>

                                <button onClick={() => openRejectModal(w.id)}
                                    className="text-red-600 hover:scale-110 transition text-xs font-semibold">
                                    Reject
                                </button>

                                <button onClick={() => openForm(w)}
                                    className="text-blue-500 hover:scale-110 transition">
                                    <Pencil size={20} />
                                </button>

                                <button onClick={() => handleDelete(w.id)}
                                    className="text-red-600 hover:scale-110 transition">
                                    <Trash size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Show Rejection Comment if rejected */}
                        {w.status === "Rejected" && (
                            <div className="mt-3 p-3 rounded-md bg-red-50 dark:bg-red-900/30 text-sm text-red-800 dark:text-red-300 flex gap-2">
                                <MessageCircle size={16} />
                                <p>{w.comment}</p>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            {/* ======= ADD/EDIT MODAL ======= */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn">

                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl p-6 border dark:border-none animate-scaleIn">

                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-red-800 dark:text-slate-200">
                                {editing ? "Edit Request" : "Add New Request"}
                            </h3>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={22} className="text-red-800 dark:text-slate-200" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* EMPLOYEE */}
                            <div>
                                <label className="text-sm dark:text-slate-200">Employee Name</label>
                                <input type="text" name="employee" value={formData.employee} onChange={handleChange}
                                    className="w-full p-2 mt-1 rounded-lg bg-red-50 dark:bg-slate-800 dark:text-slate-200 border border-red-100 dark:border-slate-700" />
                            </div>

                            {/* DATE */}
                            <div>
                                <label className="text-sm dark:text-slate-200">Request Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleChange}
                                    className="w-full p-2 mt-1 rounded-lg bg-red-50 dark:bg-slate-800 dark:text-slate-200 border border-red-100 dark:border-slate-700" />
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <label className="text-sm dark:text-slate-200">Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                                    className="w-full p-2 mt-1 rounded-lg bg-red-50 dark:bg-slate-800 dark:text-slate-200 border  border-red-100 dark:border-slate-700" />
                            </div>

                            {/* DETAILS */}
                            <div>
                                <label className="text-sm dark:text-slate-200">Details</label>
                                <textarea name="details" value={formData.details} onChange={handleChange}
                                    className="w-full p-2 mt-1 rounded-lg bg-red-50 dark:bg-slate-800 dark:text-slate-200 border  border-red-100 dark:border-slate-700" />
                            </div>

                            {/* BUTTONS */}
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-lg border border-red-800 dark:border-slate-300 text-red-800 dark:text-slate-200">
                                    Cancel
                                </button>
                                <button type="submit"
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black text-white">
                                    {editing ? "Update Request" : "Add Request"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            )}
            {/* ======= REJECTION COMMENT MODAL ======= */}
            {commentOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn">

                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md shadow-xl p-5 animate-scaleIn">

                        <h3 className="text-lg font-semibold mb-2 dark:text-white">
                            Add Rejection Comment
                        </h3>

                        <textarea
                            rows="3"
                            value={rejectComment}
                            onChange={(e) => setRejectComment(e.target.value)}
                            className="w-full p-3 mt-2 rounded-lg bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
                            placeholder="Enter reason for rejection..."
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <button onClick={() => setCommentOpen(false)}
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700">
                                Cancel
                            </button>

                            <button onClick={submitComment}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-800 to-black text-white">
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default PendingRequest;
