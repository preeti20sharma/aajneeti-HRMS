
import { recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";
import { Home } from "lucide-react";
import profileImg from "@/assets/profile-image.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";


import { Users } from "lucide-react";

const DashboardPage = () => {
    const [admin] = useState({
        name: "Preeti Sharma",
        email: "preetiaajneeti@gmail.com",
        phone: "6396634822",
        position: "Head",
        image: profileImg,
        adminID: "admin123",
    })

    return (
        <div className="p-2 md:p-2 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 space-y-6">
            <div className="flex flex-col p-2">
                <div className="flex items-center gap-2">
                    <Home size={24} className="text-red-800 dark:text-red-600" />
                    <h2 className="text-2xl font-bold 
            bg-gradient-to-r from-red-800 to-slate-900 
            bg-clip-text text-transparent 
            animate-gradient-slide
            dark:text-slate-100">Admin Dashboard</h2>
                </div>
                <p className="ml-8 text-red-800 dark:text-slate-50">Welcome back! Preeti</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">

                {/* LEFT SIDE — 4 CARDS (2x2 GRID) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:col-span-2 xl:col-span-3">

                    {/* CARD 1 */}
                    <div className="card h-[160px] border border-red-100">
                        <div className="card-header">
                            <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">Present Employees</p>
                        </div>
                        <div className="card-body bg-red-50 dark:bg-slate-950">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">40</p>
                                <Link to="/attendance-insights" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="card h-[160px] border border-red-100">
                        <div className="card-header">
                            <div className="rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">On Full Leaves</p>
                        </div>
                        <div className="card-body bg-red-50 dark:bg-slate-950">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">04</p>
                                <Link to="/attendance-insights" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="card h-[160px] border border-red-100">
                        <div className="card-header">
                            <div className="rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">On Half Leave</p>
                        </div>
                        <div className="card-body bg-red-50 dark:bg-slate-950">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">10</p>
                                <Link to="/attendance-insights" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="card h-[160px] border border-red-100">
                        <div className="card-header">
                            <div className="rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">On Short Leave</p>
                        </div>
                        <div className="card-body bg-red-50 dark:bg-slate-950">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">10</p>
                                <Link to="/attendance-insights" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="card h-[160px] border border-red-100">
                        <div className="card-header">
                            <div className="rounded-lg bg-red-500/20 p-2 text-red-800 dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">Work From Home</p>
                        </div>
                        <div className="card-body bg-red-50 dark:bg-slate-950">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">10</p>
                                <Link to="/attendance-insights" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — PROFILE CARD (ALWAYS ON TOP) */}
                <div className="md:col-span-1 xl:col-span-1">
                    <div className="
            rounded-xl p-5 shadow-lg border border-red-900
            bg-gradient-to-br from-black via-red-800 to-black
            text-white backdrop-blur-md
            transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
        ">
                        <div className="card-header flex flex-col items-center">

                            {/* Profile Image */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-700 shadow-md mb-3 ring-2 ring-red-400/40">
                                <img src={admin.image} alt="Profile" className="w-full h-full object-cover" />
                            </div>

                            {/* Name */}
                            <h2 className="text-xl font-semibold text-red-200">{admin.name}</h2>

                            {/* Details */}
                            <p className="text-sm text-slate-100">{admin.adminID}</p>
                            <p className="text-sm text-slate-100">{admin.email}</p>
                            <p className="text-sm text-red-300">{admin.phone}</p>

                            {/* Position */}
                            <p className="text-sm mt-1 font-semibold text-red-400 tracking-wide">
                                {admin.position}
                            </p>

                            {/* Button */}
                            <Link to="/admin-profile" state={{ admin }}>
                                <button className="mt-4 rounded-md px-4 py-1.5 text-sm font-medium 
                        bg-gradient-to-r from-red-700 to-red-900 
                        text-white border border-red-700 shadow-md 
                        hover:from-red-600 hover:to-red-800 transition-all duration-300">
                                    Edit Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                <div className=" card col-span-1 md:col-span-2 lg:col-span-3  rounded-xl  bg-white dark:bg-slate-900  transition-all duration-300  shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    border border-red-100  dark:border-slate-700
                    dark:shadow-none 
                    dark:hover:shadow-none">
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
                                        <th className="table-head">From</th>
                                        <th className="table-head">To</th>
                                        <th className="table-head">Leave Type</th>
                                    </tr>
                                </thead>

                                <tbody className="table-body">
                                    {topProducts.map((product) => (
                                        <tr key={product.name} className="table-row border-b border-red-100 hover:bg-red-50 dark:hover:bg-slate-800/50">

                                            <td className="table-cell">
                                                <div className="flex w-max gap-x-4">
                                                    <img src={product.image} alt={product.name} className="size-14 rounded-lg object-cover border border-red-100" />
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
    rounded-xl  border border-red-100
    bg-white dark:bg-slate-900 
    shadow-md shadow-red-500/20 
  hover:shadow-red-500/20
 dark:border-slate-700
  dark:shadow-none 
  dark:hover:shadow-none
    transition-all duration-300 
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
                    border-b border-red-100 dark:border-slate-700/40
                    hover:bg-red-50 dark:hover:bg-slate-800/40
                    transition-all duration-200
                ">
                                {/* Left Section */}
                                <div className="flex items-center gap-x-4">
                                    <img src={sale.image} alt={sale.name} className="
                            size-12 rounded-full object-cover
                            border border-red-100 shadow-sm
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
    card rounded-xl 
    bg-white dark:bg-slate-900 
    shadow-md  shadow-red-500/20 
  border border-red-100  dark:border-slate-700
  dark:shadow-none 
    transition-all duration-300 
">
                {/* Header */}
                <div className="
        card-header px-4 py-3
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-slate-200
    ">
                    <p className="card-title">Full Leave Status</p>
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
                    dark:bg-none dark:text-slate-200
                ">
                                <tr className="table-row">
                                    <th className="table-head">ID</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Leave Type</th>
                                    <th className="table-head">From</th>
                                    <th className="table-head">To</th>
                                    <th className="table-head">Days</th>
                                    <th className="table-head">Reason</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Approved By</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="table-body text-slate-900 dark:text-slate-200">
                                {topProducts.map((product) => (
                                    <tr key={product.number} className="
                                table-row border-b border-red-100 dark:border-slate-700/40
                                hover:bg-red-50 dark:hover:bg-slate-800/50
                                transition-all duration-200
                            ">
                                        <td className="table-cell font-semibold">{product.number}</td>

                                        {/* Name + Image */}
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4 items-center">
                                                <img src={product.image} alt={product.name} className="
                                            size-14 rounded-lg object-cover
                                            border border-red-100 shadow-sm
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
                                        <td className="table-cell">{product.reason}</td>

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
                                        <td className="table-cell">{product.approvedby}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="
    card rounded-xl 
    bg-white dark:bg-slate-900 
    shadow-md  shadow-red-500/20 
  border border-red-100  dark:border-slate-700
  dark:shadow-none 
    transition-all duration-300 
">
                {/* Header */}
                <div className="
        card-header px-4 py-3
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-slate-200
    ">
                    <p className="card-title">Half Leave Status</p>
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
                    dark:bg-none dark:text-slate-200
                ">
                                <tr className="table-row">
                                    <th className="table-head">ID</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Leave Type</th>
                                    <th className="table-head">Date</th>
                                    <th className="table-head">From</th>
                                    <th className="table-head">To</th>
                                    <th className="table-head">Total Hours</th>
                                    <th className="table-head">Reason</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Approved By</th>

                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="table-body text-slate-900 dark:text-slate-200">
                                {topProducts.map((product) => (
                                    <tr key={product.number} className="
                                table-row border-b border-red-100 dark:border-slate-700/40
                                hover:bg-red-50 dark:hover:bg-slate-800/50
                                transition-all duration-200
                            ">
                                        <td className="table-cell font-semibold">{product.number}</td>

                                        {/* Name + Image */}
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4 items-center">
                                                <img src={product.image} alt={product.name} className="
                                            size-14 rounded-lg object-cover
                                            border border-red-100 shadow-sm
                                        " />
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">{product.name}</p>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="table-cell">{product.leaveType}</td>
                                        <td className="table-cell">{product.date}</td>
                                        <td className="table-cell">{product.from}</td>
                                        <td className="table-cell">{product.to}</td>
                                        <td className="table-cell">{product.days}</td>
                                        <td className="table-cell">{product.reason}</td>
                                        <td className="table-cell">{product.approvedby}</td>

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

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="
    card rounded-xl 
    bg-white dark:bg-slate-900 
    shadow-md  shadow-red-500/20 
  border border-red-100  dark:border-slate-700
  dark:shadow-none 
    transition-all duration-300 
">
                {/* Header */}
                <div className="
        card-header px-4 py-3
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-slate-200
    ">
                    <p className="card-title">Work from Home status</p>
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
                    dark:bg-none dark:text-slate-200
                ">
                                <tr className="table-row">
                                    <th className="table-head">ID</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Place</th>
                                    <th className="table-head">From date</th>
                                    <th className="table-head">To date</th>
                                    <th className="table-head">Reason</th>
                                    <th className="table-head">Approved By</th>
                                    <th className="table-head">Status</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="table-body text-slate-900 dark:text-slate-200">
                                {topProducts.map((product) => (
                                    <tr key={product.number} className="
                                table-row border-b border-red-100 dark:border-slate-700/40
                                hover:bg-red-50 dark:hover:bg-slate-800/50
                                transition-all duration-200
                            ">
                                        <td className="table-cell font-semibold">{product.number}</td>

                                        {/* Name + Image */}
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4 items-center">
                                                <img src={product.image} alt={product.name} className="
                                            size-14 rounded-lg object-cover
                                            border border-red-100 shadow-sm
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
                                        <td className="table-cell">{product.reason}</td>

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
                                        <td className="table-cell">{product.reason}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;