import {
    CalendarDays,
    HomeIcon,
    PencilLine,
    Trash,
    PlusSquare,
    X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Utility to group holidays by month
const groupByMonth = (data) => {
    return data.reduce((acc, holiday) => {
        const month = new Date(holiday.date).toLocaleString("default", {
            month: "long",
        });
        if (!acc[month]) acc[month] = [];
        acc[month].push(holiday);
        return acc;
    }, {});
};

const CompanyHolidays = () => {
    const [holidays, setHolidays] = useState([
        { id: 1, name: "New Year", date: "2025-01-01", day: "Wednesday" },
        { id: 2, name: "Republic Day", date: "2025-01-26", day: "Sunday" },
        { id: 3, name: "Holi", date: "2025-03-14", day: "Friday" },
        { id: 4, name: "Independence Day", date: "2025-08-15", day: "Friday" },
        { id: 5, name: "Diwali", date: "2025-10-20", day: "Monday" },
        { id: 6, name: "Gandhi jayanti", date: "2025-10-02", day: "wednesday" },

    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [editingHoliday, setEditingHoliday] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        day: "",
    });

    const groupedHolidays = groupByMonth(holidays);

    // Open Form for Add or Edit
    const openForm = (holiday = null) => {
        if (holiday) {
            setEditingHoliday(holiday);
            setFormData(holiday);
        } else {
            setEditingHoliday(null);
            setFormData({ name: "", date: "", day: "" });
        }
        setIsOpen(true);
    };

    // Handle Form Input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingHoliday) {
            // Update existing holiday
            setHolidays(
                holidays.map((h) =>
                    h.id === editingHoliday.id ? { ...formData, id: h.id } : h
                )
            );
        } else {
            // Add new holiday
            const newHoliday = {
                ...formData,
                id: holidays.length + 1,
            };
            setHolidays([...holidays, newHoliday]);
        }

        setIsOpen(false);
    };

    // Delete Holiday
    const handleDelete = (id) => {
        setHolidays(holidays.filter((h) => h.id !== id));
    };

    return (
        <div className="w-full mx-auto p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 ">
                        <CalendarDays
                            size={24}
                            className="text-purple-600 dark:text-purple-400"
                        />
                        <h2 className="text-2xl font-bold">Company Holidays</h2>
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
                        <li className="text-slate-600 dark:text-slate-50">
                            Company Holidays
                        </li>
                    </ul>
                </div>

                {/* Add Event Button */}
                <button
                    onClick={() => openForm()}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                >
                    <PlusSquare size={18} /> Add Event
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700">
                <table className="min-w-full border-collapse">
                    <thead className="sticky top-0 bg-slate-200 dark:bg-slate-800 z-10">
                        <tr className="text-xs uppercase text-slate-700 dark:text-slate-300">
                            <th className="border px-4 py-2 text-left">Occasion</th>
                            <th className="border px-4 py-2 text-center">Day</th>
                            <th className="border px-4 py-2 text-center">Date</th>
                            <th className="border px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(groupedHolidays).map(
                            ([month, holidays]) => (
                                <React.Fragment key={month}>
                                    {/* Month Row */}
                                    <tr className="bg-purple-100 dark:bg-purple-950">
                                        <td
                                            colSpan="4"
                                            className="text-left px-4 py-2 font-bold text-purple-700 dark:text-purple-300 border-y border-slate-300 dark:border-slate-700"
                                        >
                                            {month}
                                        </td>
                                    </tr>

                                    {/* Holidays */}
                                    {holidays.map((holiday) => (
                                        <tr
                                            key={holiday.id}
                                            className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                                        >
                                            <td className="border px-4 py-2 font-medium">
                                                {holiday.name}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {holiday.day}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {holiday.date}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <div className="flex items-center justify-center gap-4">
                                                    <button
                                                        onClick={() =>
                                                            openForm(holiday)
                                                        }
                                                        className="text-blue-500 dark:text-blue-400 hover:scale-110 transition"
                                                    >
                                                        <PencilLine size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                holiday.id
                                                            )
                                                        }
                                                        className="text-red-500 hover:scale-110 transition"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Form */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-md shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">
                                {editingHoliday
                                    ? "Edit Holiday"
                                    : "Add New Holiday"}
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-500 hover:text-red-500"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Employee name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Occasion Name"
                                    className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Employee name
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Employee name
                                </label>
                                <input
                                    type="text"
                                    name="day"
                                    value={formData.day}
                                    onChange={handleChange}
                                    placeholder="Day (e.g. Monday)"
                                    className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
                            >
                                {editingHoliday ? "Update Holiday" : "Add Holiday"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyHolidays;
