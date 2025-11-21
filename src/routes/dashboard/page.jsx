import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";

import profileImg from "@/assets/profile-image.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";


import { DollarSign, Package, PencilLine, Trash, Users } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();
    const [admin] = useState({
        name: "Preeti Sharma",
        email: "preetiaajneeti@gmail.com",
        phone: "6396634822",
        position: "Head",
        image: profileImg,
        adminID: "admin123",
    })

    return (
        <div className="flex flex-col gap-y-4">
            <h5 className="title">Admin Dashboard</h5>
            <p className="text-slate-900 dark:text-slate-50">Welcome back! Preeti</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 transition-colors dark:bg-red-600/20 dark:text-red-800">
                            <Package size={26} />
                        </div>
                        <p className="card-title"> Leaves</p>
                    </div>
                    <div className="card-body bg-red-50 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-red-800 px-6 py-1 font-medium text-red-800 dark:border-red-800 dark:text-red-800">
                            view
                        </span>
                    </div>
                </div>
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="rounded-lg bg-red-500/20 p-2 text-red-800 transition-colors dark:bg-red-600/20 dark:text-red-800">
                            <DollarSign size={26} />
                        </div>
                        <p className="card-title">Salary</p>
                    </div>
                    <div className="card-body bg-red-50 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">$16,000</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-red-800 px-6 py-1 font-medium text-red-800 dark:border-red-800 dark:text-red-800">
                            view
                        </span>
                    </div>
                </div>
                <div className="card h-[200px]">
                    <div className="card-header">
                        <div className="rounded-lg bg-red-500/20 p-2 text-red-800 transition-colors dark:bg-red-600/20 dark:text-red-800">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Employee</p>
                    </div>
                    <div className="card-body bg-red-50 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-red-800 px-6 py-1 font-medium text-red-800 dark:border-red-800 dark:text-red-800">
                            view
                        </span>
                    </div>
                </div>
                <div className="relative hidden sm:inline">
                    <div className="
      rounded-xl p-5 shadow-lg border border-red-900
      bg-gradient-to-br from-black via-red-800 to-black
      text-white backdrop-blur-md
      transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
      after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-red-600/20 after:to-black/20 after:-z-10
      animate-[float_4s_ease-in-out_infinite]
  ">
                        <div className="card-header flex flex-col items-center">

                            {/* Profile Image */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-700 shadow-md mb-3 
                      ring-2 ring-red-400/40">
                                <img src={admin.image} alt="Profile" className="w-full h-full object-cover" />
                            </div>

                            {/* Name */}
                            <h2 className="text-xl font-semibold text-red-200 drop-shadow-sm">
                                {admin.name}
                            </h2>

                            {/* Details */}
                            <p className="text-sm text-red-300">{admin.adminID}</p>
                            <p className="text-sm text-red-300">{admin.email}</p>
                            <p className="text-sm text-red-300">{admin.phone}</p>

                            {/* Position */}
                            <p className="text-sm mt-1 font-semibold text-red-400 tracking-wide">
                                {admin.position}
                            </p>

                            {/* Button */}
                            <Link to="/admin-profile" state={{ admin }}>
                                <button className="  mt-4 rounded-md px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-red-700 to-red-900 text-white border border-red-700 shadow-md hover:from-red-600 hover:to-red-800 transition-all duration-300 ">
                                    Edit Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                <div className=" card col-span-1 md:col-span-2 lg:col-span-3  rounded-xl border border-red-700/40 shadow-md bg-white dark:bg-slate-900  transition-all duration-300 hover:shadow-red-700/40 hover:border-red-700">
                    <div className="card-header px-4 py-3  rounded-t-xl  font-semibold tracking-wide dark:bg-none dark:text-red-300 ">
                        <p className="card-title">UpComing Leaves</p>
                    </div>

                    <div className="card-body p-0 h-[300px] overflow-hidden">
                        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">

                            <table className="table w-full">
                                <thead className="
                    table-header
                   bg-red-50
                    text-slate-800 
                
                    dark:bg-none dark:text-red-300
                ">
                                    <tr className="table-row">
                                        <th className="table-head">Name</th>
                                        <th className="table-head">Date</th>
                                        <th className="table-head">Leave Type</th>
                                    </tr>
                                </thead>

                                <tbody className="table-body">
                                    {topProducts.map((product) => (
                                        <tr key={product.name} className="table-row hover:bg-red-50 dark:hover:bg-slate-800/50">

                                            <td className="table-cell">
                                                <div className="flex w-max gap-x-4">
                                                    <img src={product.image} alt={product.name} className="size-14 rounded-lg object-cover border border-red-700/40" />
                                                    <div className="flex flex-col">
                                                        <p className="font-semibold text-black dark:text-white">
                                                            {product.name}
                                                        </p>
                                                        <p className="font-normal text-slate-600 dark:text-slate-400">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="table-cell text-black dark:text-white">
                                                {product.from}
                                            </td>

                                            <td className="table-cell text-red-700 dark:text-red-400 font-semibold">
                                                {product.leaveType}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="
    card h-[380px] col-span-1 md:col-span-2 lg:col-span-3
    rounded-xl border border-red-700/40 
    bg-white dark:bg-slate-900 
    shadow-md hover:shadow-red-700/40 
    transition-all duration-300 hover:border-red-700
">
                    {/* Header */}
                    <div className="
        card-header px-4 py-3
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-red-300
    ">
                        <p className="card-title">Today</p>
                    </div>

                    {/* Body */}
                    <div className="card-body h-[300px] overflow-auto p-0 [scrollbar-width:_thin]">

                        {recentSalesData.map((sale) => (
                            <div key={sale.id} className="
                    flex items-center justify-between gap-x-4 py-2 pr-2 px-2
                    border-b border-slate-200/40 dark:border-slate-700/40
                    hover:bg-red-50 dark:hover:bg-slate-800/40
                    transition-all duration-200
                ">
                                {/* Left Section */}
                                <div className="flex items-center gap-x-4">
                                    <img src={sale.image} alt={sale.name} className="
                            size-12 rounded-full object-cover
                            border border-red-700/40 shadow-sm
                        " />
                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-semibold text-slate-900 dark:text-white">
                                            {sale.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <p className="font-semibold text-red-700 dark:text-red-400">
                                    {sale.today}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="
    card rounded-xl border border-red-700/40 
    bg-white dark:bg-slate-900 
    shadow-md hover:shadow-red-700/40 
    transition-all duration-300  hover:border-red-700
">
                {/* Header */}
                <div className="
        card-header px-4 py-3
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-red-300
    ">
                    <p className="card-title">Leave Status</p>
                </div>

                {/* Body */}
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">

                        <table className="table w-full text-left">
                            {/* Table Header */}
                            <thead className="
                    table-header 
                  bg-red-50
                    text-slate-800 
                    dark:bg-none dark:text-red-300
                ">
                                <tr className="table-row">
                                    <th className="table-head">ID</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Leave Type</th>
                                    <th className="table-head">From</th>
                                    <th className="table-head">To</th>
                                    <th className="table-head">Days</th>
                                    <th className="table-head">Remaining Days</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="table-body text-slate-900 dark:text-slate-200">
                                {topProducts.map((product) => (
                                    <tr key={product.number} className="
                                table-row border-b border-slate-200/40 dark:border-slate-700/40
                                hover:bg-red-50/60 dark:hover:bg-slate-800/50
                                transition-all duration-200
                            ">
                                        <td className="table-cell font-semibold">{product.number}</td>

                                        {/* Name + Image */}
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4 items-center">
                                                <img src={product.image} alt={product.name} className="
                                            size-14 rounded-lg object-cover
                                            border border-red-700/40 shadow-sm
                                        " />
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">{product.name}</p>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="table-cell">{product.leaveType}</td>
                                        <td className="table-cell">{product.from}</td>
                                        <td className="table-cell">{product.to}</td>
                                        <td className="table-cell">{product.days}</td>
                                        <td className="table-cell">{product.remainingDays}</td>

                                        {/* Status badge */}
                                        <td className="table-cell">
                                            <span className="
                                    px-3 py-1 rounded-full text-xs font-semibold
                                    bg-red-100 text-red-700 
                                    dark:bg-slate-800 dark:text-red-400
                                ">
                                                {product.status}
                                            </span>
                                        </td>

                                        {/* Action Buttons */}
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-red-600 hover:scale-110 transition">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-red-600 hover:scale-110 transition">
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
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={overviewData} margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}>
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={false} formatter={(value) => `$${value}`}
                                />

                                <XAxis dataKey="name" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                                <YAxis dataKey="total" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickFormatter={(value) => `$${value}`}
                                    tickMargin={6}
                                />

                                <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="
    card col-span-1 md:col-span-2 lg:col-span-3
    rounded-xl border border-red-700/40 
    bg-white dark:bg-slate-900 
    shadow-md hover:shadow-red-700/40 
    transition-all duration-300 hover:border-red-700
">
                    {/* Header */}
                    <div className="
        card-header px-4 py-3
       bg-red-50
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-red-300
    ">
                        <p className="card-title">Recent Activities</p>
                    </div>

                    {/* Body */}
                    <div className="card-body h-[300px] overflow-auto p-0 [scrollbar-width:_thin]">

                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="
                    flex items-center justify-between gap-x-4 py-3 px-2
                    border-b border-slate-200/40 dark:border-slate-700/40
                    hover:bg-red-50/50 dark:hover:bg-slate-800/50
                    transition-all duration-200
                "
                            >
                                {/* Left Side */}
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="
                            size-12 rounded-full object-cover 
                            border border-red-700/40 shadow-sm
                        "
                                    />
                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-semibold text-slate-900 dark:text-white">
                                            {sale.name}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {sale.email}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side */}
                                <p className="font-semibold text-red-700 dark:text-red-400">
                                    ${sale.total}
                                </p>
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