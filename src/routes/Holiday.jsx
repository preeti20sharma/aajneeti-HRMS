import { CalendarDays, PencilLine, Trash } from "lucide-react";
import React from "react";

const holidays = [
    { id: 1, name: "New Year", date: "2025-01-01", day: "Wednesday" },
    { id: 2, name: "Republic Day", date: "2025-01-26", day: "Sunday" },
    { id: 3, name: "Holi", date: "2025-03-14", day: "Friday" },
    { id: 4, name: "Independence Day", date: "2025-08-15", day: "Friday" },
    { id: 5, name: "Diwali", date: "2025-10-20", day: "Monday" },
    { id: 6, name: "Republic Day", date: "2025-01-26", day: "Sunday" },
    { id: 7, name: "Holi", date: "2025-03-14", day: "Friday" },
    { id: 8, name: "Independence Day", date: "2025-08-15", day: "Friday" },
    { id: 9, name: "Diwali", date: "2025-10-20", day: "Monday" },
];

// Utility to group holidays by month
const groupByMonth = (data) => {
    return data.reduce((acc, holiday) => {
        const month = new Date(holiday.date).toLocaleString("default", { month: "long" });
        if (!acc[month]) acc[month] = [];
        acc[month].push(holiday);
        return acc;
    }, {});
};

const CompanyHolidays = () => {
    const groupedHolidays = groupByMonth(holidays);

    return (
        <div className="w-full mx-auto p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <CalendarDays size={24} className="text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold">Company Holidays</h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700">
                <table className="min-w-full border-collapse">
                    <thead className="sticky top-0 bg-slate-200 dark:bg-slate-800 z-10">
                        <tr className="text-xs uppercase text-slate-700 dark:text-slate-300">
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Occasion</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-center">Day</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-center">Date</th>
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(groupedHolidays).map(([month, holidays]) => (
                            <React.Fragment key={month}>
                                {/* Month Row */}
                                <tr className="bg-purple-100 dark:bg-purple-950 sticky top-10 z-0">
                                    <td
                                        colSpan="4"
                                        className="text-left px-4 py-2 font-bold text-purple-700 dark:text-purple-300 border-y border-slate-300 dark:border-slate-700"
                                    >
                                        {month}
                                    </td>
                                </tr>

                                {/* Holidays in this month */}
                                {holidays.map((holiday) => (
                                    <tr
                                        key={holiday.id}
                                        className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                                    >
                                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">
                                            {holiday.name}
                                        </td>
                                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-center">
                                            {holiday.day}
                                        </td>
                                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-center">
                                            {holiday.date}
                                        </td>
                                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                                            <div className="flex items-center justify-center gap-4">
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
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyHolidays;
