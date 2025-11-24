
const Attendance = () => {
    return (

        <div className="w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100 p-6">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
                    Daily Attendance Report
                </h1>
                <p className="text-sm text-red-300 mt-1">Track: Late Coming, Half Day, Short Leave, WFH</p>
            </header>

            {/* Filters Section */}
            <div className="bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-left p-4 rounded-xl shadow-lg mb-6">
                <h2 className="text-lg font-semibold mb-3">Filters</h2>
                <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
                    <select className="p-2 bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-left rounded-md outline-none text-sm">
                        <option>Date</option>
                    </select>
                    <select className="p-2 bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-left rounded-md outline-none text-sm">
                        <option>Status Type</option>
                    </select>
                    <select className="p-2 bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-left rounded-md outline-none text-sm">
                        <option>Department</option>
                    </select>
                    <button className="border-red-100 dark:border-slate-700 text-left hover:bg-red-700 transition px-4 py-2 rounded-md text-sm font-semibold">
                        Apply
                    </button>
                </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 p-6 rounded-xl shadow-lg overflow-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-red-700 to-black text-white">
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">ID</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">Name</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">Date</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">Entry Time</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">Status</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-left">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, i) => (
                            <tr
                                key={i}
                                className="hover:bg-red-900/20 transition border-b border-red-100 dark:border-slate-700"
                            >
                                <td className="p-3">EMP{100 + i}</td>
                                <td className="p-3">Employee {i + 1}</td>
                                <td className="p-3">24 Nov 2025</td>
                                <td className="p-3">10:05 AM</td>
                                <td className="p-3">
                                    <span className="px-3 py-1 rounded-md bg-red-700 text-white text-xs">
                                        Late
                                    </span>
                                </td>
                                <td className="p-3 text-red-300">Came 5 mins late</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Summary Cards */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-8">
                {[
                    { label: "Total Employees", value: 40 },
                    { label: "Present", value: 32 },
                    { label: "Late Coming", value: 5 },
                    { label: "WFH", value: 3 },
                ].map((card, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-red-800 to-black border border-red-700 p-4 rounded-xl shadow-md hover:shadow-red-700/30 transition"
                    >
                        <h3 className="text-sm text-red-100">{card.label}</h3>
                        <p className="text-2xl text-red-100 font-bold mt-1">{card.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Attendance