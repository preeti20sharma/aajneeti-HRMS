import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";

import profileImg from "@/assets/profile-image.jpg";


import { DollarSign, Package, PencilLine, Trash, Users } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h5 className="title">Admin Dashboard</h5>
            <p className="text-slate-900 dark:text-slate-50">Welcome back! Preeti</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Package size={26} />
                        </div>
                        <p className="card-title"> Leaves</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-6 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            view
                        </span>
                    </div>
                </div>
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <DollarSign size={26} />
                        </div>
                        <p className="card-title">Salary</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">$16,000</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-6 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            view
                        </span>
                    </div>
                </div>
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Employee</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-6 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            view
                        </span>
                    </div>
                </div>
                <div className="border border-1 rounded-md shadow p-10">
                    <div className="card-header flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500 shadow-md mb-3">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            Preeti sharma
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            preetiaajneeti@gmail.com
                        </p>
                        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                            Frontend Developer
                        </p>
                        <button className="mt-3 rounded-md border border-blue-500 px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">UpComing Leaves</p>
                    </div>
                    <div className="card-body p-0 h-[300px] overflow-hidden">
                        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                            <table className="table">
                                <thead className="table-header">
                                    <tr className="table-row">
                                        <th className="table-head">Name</th>
                                        <th className="table-head">Date</th>
                                        <th className="table-head">Leave Type</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {topProducts.map((product) => (
                                        <tr
                                            key={product.name}
                                            className="table-row"
                                        >
                                            {/* <td className="table-cell">{product.number}</td> */}
                                            <td className="table-cell">
                                                <div className="flex w-max gap-x-4">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="size-14 rounded-lg object-cover"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p>{product.name}</p>
                                                        <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-cell">{product.from}</td>
                                            <td className="table-cell">{product.leaveType}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card h-[380px] col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header ">
                        <p className="card-title">Today</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        {/* <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p> */}
                                    </div>
                                </div>
                                <p className="font-medium text-slate-500 dark:text-slate-40">{sale.today}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Leave Status</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">ID</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Leave Type</th>
                                    <th className="table-head">From</th>
                                    <th className="table-head">To</th>
                                    <th className="table-head">Days</th>
                                    <th className="table-head">Remaining Leaves</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Action</th>

                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topProducts.map((product) => (
                                    <tr
                                        key={product.number}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{product.number}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">{product.leaveType}</td>
                                        <td className="table-cell">{product.from}</td>
                                        <td className="table-cell">{product.to}</td>
                                        <td className="table-cell">{product.days}</td>
                                        <td className="table-cell">{product.remainingDays}</td>
                                        <td className="table-cell">{product.status}</td>

                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
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
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Overview</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <AreaChart
                                data={overviewData}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorTotal"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#2563eb"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#2563eb"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    cursor={false}
                                    formatter={(value) => `$${value}`}
                                />

                                <XAxis
                                    dataKey="name"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickMargin={6}
                                />
                                <YAxis
                                    dataKey="total"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value) => `$${value}`}
                                    tickMargin={6}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#2563eb"
                                    fillOpacity={1}
                                    fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recent Activities</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">${sale.total}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
