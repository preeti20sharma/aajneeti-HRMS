import { Bell, Calendar, Clock, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            title: "Policy Update",
            message: "New HR policy has been updated for all employees.",
            date: "2025-02-01",
            time: "10:30 AM",
        },
        {
            id: 2,
            title: "Meeting Reminder",
            message: "Team meeting scheduled at 4 PM. Please join on time.",
            date: "2025-02-03",
            time: "4:00 PM",
        },
        {
            id: 3,
            title: "Holiday Announcement",
            message: "Office will remain closed on 12 Feb for maintenance.",
            date: "2025-02-10",
            time: "9:00 AM",
        }
    ];

    return (
        <div className="w-full mx-auto rounded-2xl bg-slate-50 dark:bg-slate-900 min-h-screen p-4">

            {/* ===== PAGE HEADER ===== */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <div className="flex items-center gap-3">
                        <Bell size={30} className="text-red-800 dark:text-red-600" />
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent dark:bg-none dark:text-slate-200">Notifications</h2>
                    </div>

                    <div className="flex items-center text-sm mt-2  dark:text-slate-200">
                        <Link to="/" className="flex items-center gap-1 hover:underline">
                            <HomeIcon size={14} />
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span >Notifications</span>
                    </div>
                </div>
            </div>

            {/* ===== NOTIFICATION LIST ===== */}
            <div className="grid grid-cols-1 gap-4">
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className="bg-white dark:bg-slate-800 border-l-4 border-red-600 rounded-xl shadow-md hover:shadow-xl transition p-4"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                            {/* TEXT CONTENT */}
                            <div>
                                <h3 className="text-lg font-semibold text-red-700 dark:text-slate-200">
                                    {n.title}
                                </h3>
                                <p className="text-sm opacity-80 mt-1 dark:text-slate-200">{n.message}</p>
                            </div>

                            {/* DATE & TIME */}
                            <div className="flex flex-row gap-4 sm:flex-col text-sm text-red-800 dark:text-red-700 min-w-[120px]">
                                <span className="flex gap-2 items-center bg-red-300/20 dark:bg-red-200 px-2 py-1 rounded-lg w-max">
                                    <Calendar size={14} /> {n.date}
                                </span>
                                <span className="flex gap-2 items-center  bg-red-300/20 dark:bg-red-200 px-2 py-1 rounded-lg w-max">
                                    <Clock size={14} /> {n.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
