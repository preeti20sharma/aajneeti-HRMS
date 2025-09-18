import { CalendarDays, PencilLine, Trash } from "lucide-react";

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

const CompanyHolidays = () => {
    return (
        <div
            className="w-full  mx-auto p-6 
                 bg-white dark:bg-slate-900 
                 rounded-2xl shadow-lg 
                 text-slate-800 dark:text-slate-100"
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <CalendarDays size={24} className="text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold">Company Holidays</h2>
            </div>

            {/* Table Header */}
            <div
                className="grid grid-cols-4 text-sm font-semibold uppercase 
                   border-b border-slate-300 dark:border-slate-700 
                   pb-2 mb-3 text-slate-600 dark:text-slate-300"
            >
                <span>Occasion</span>
                <span className="text-center">Day</span>
                <span className="text-center">Date</span>
                <span className="text-right">Action</span>
            </div>

            {/* Holiday List */}
            <div className="space-y-2">
                {holidays.map((holiday) => (
                    <div
                        key={holiday.id}
                        className="grid grid-cols-4 items-center 
                       bg-slate-100 dark:bg-slate-800 
                       rounded-xl px-4 py-3 
                       hover:bg-slate-200 dark:hover:bg-slate-700 
                       transition-colors"
                    >
                        <h3 className="text-base font-medium">{holiday.name}</h3>
                        <span className="text-sm text-center">{holiday.day}</span>
                        <span className="text-sm text-center">{holiday.date}</span>

                        <div className="flex items-center justify-end gap-4">
                            <button className="text-blue-500 dark:text-blue-400 hover:scale-110 transition">
                                <PencilLine size={20} />
                            </button>
                            <button className="text-red-500 hover:scale-110 transition">
                                <Trash size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyHolidays;
