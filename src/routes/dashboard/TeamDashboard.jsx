
import { recentSalesData, topProducts } from "@/constants";
import { Footer } from "@/layouts/footer";
import { leaves } from "@/constants";
import { Home } from "lucide-react";
import profileImg from "@/assets/profile-image.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { remoteWork } from "@/constants";
import { Users } from "lucide-react";

const TeamDashboard = () => {
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
            dark:text-slate-100">Team Dashboard</h2>
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
                <div className=" col-span-1 md:col-span-2 lg:col-span-3  rounded-xl  bg-white dark:bg-slate-900  transition-all duration-300  shadow-md 
                    shadow-red-500/20 
                    hover:shadow-red-500/20
                    border border-red-100  dark:border-slate-700
                    dark:shadow-none 
                    dark:hover:shadow-none">
                    <div className=" px-4 py-5  rounded-t-xl  font-semibold tracking-wide dark:bg-none dark:text-red-300 ">
                        <p className="card-title">UpComing Leaves</p>
                    </div>

                    <div className=" p-0 h-[300px] overflow-hidden">
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
                        h-[380px] col-span-1 md:col-span-2 lg:col-span-3
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
         px-4 py-5
       
        rounded-t-xl text-white 
        font-semibold tracking-wide
        dark:bg-none dark:text-red-300
    ">
                        <p className="card-title">Today</p>
                    </div>

                    {/* Body */}
                    <div className=" h-[300px] overflow-auto p-0 [scrollbar-width:_thin]">

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
            {/* full leaves Table */}
            <div className="border border-red-100 dark:border-slate-700  rounded-xl py-2 px-0 ">
                {/* Heading */}
                <div className=" p-4 text-red-800 dark:text-slate-300
          text-lg font-semibold ">
                    Full Leaves Status
                </div>
                <div className="relative w-full max-h-[400px] overflow-y-auto overflow-x-auto px-1  [scrollbar-width:_thin]">
                    <table className="table">
                        <thead className="table-header bg-gradient-to-r from-red-700 to-black text-white 
                    dark:bg-slate-800 dark:text-slate-200
                    sticky top-0 z-10 shadow-sm">
                            <tr className="table-row">
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">ID</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Name</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Leaves Type</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Duration Type</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">From</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">To</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Days</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Reason</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Status</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Approved By</th>
                            </tr>
                        </thead>
                        <tbody className="table-body  divide-y divide-red-100 
                        dark:divide-slate-800
                        [&>*:nth-child(even)]:bg-red-50/40 
                        dark:[&>*:nth-child(even)]:bg-transparent">
                            {leaves.map((fullLeaves) => (
                                <tr key={fullLeaves.number} className="table-row text-sm">
                                    <td className="table-cell">{fullLeaves.number}</td>
                                    <td className="table-cell">
                                        <div className="flex w-max gap-x-4">
                                            <img
                                                src={fullLeaves.image}
                                                alt={fullLeaves.name}
                                                className="size-14 rounded-lg object-cover"
                                            />
                                            <div className="flex flex-col">
                                                <p>{fullLeaves.name}</p>
                                                <p className="font-normal text-slate-600 dark:text-slate-400">
                                                    {fullLeaves.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="table-cell">{fullLeaves.leaveType}</td>
                                    <td className="table-cell">{fullLeaves.durationType}</td>
                                    <td className="table-cell">{fullLeaves.from}</td>
                                    <td className="table-cell">{fullLeaves.to}</td>
                                    <td className="table-cell">{fullLeaves.days}</td>
                                    <td className="table-cell">{fullLeaves.remainingDays}</td>
                                    <td className="table-cell">{fullLeaves.status}</td>
                                    <td className="table-cell">{fullLeaves.approvedby}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* half Leave  Table */}
            <div className="border border-red-100 dark:border-slate-700 rounded-xl py-2 px-0 ">
                {/* Heading */}
                <div className="  text-red-800 dark:text-slate-300
        p-4  text-lg font-semibold ">
                    Half Leaves Status
                </div>
                <div className="relative w-full max-h-[400px] overflow-y-auto overflow-x-auto  px-1  [scrollbar-width:_thin]">
                    <table className="table">
                        <thead className="table-header bg-gradient-to-r from-red-700 to-black text-white 
                    dark:bg-slate-800 dark:text-slate-200
                    sticky top-0 z-10 shadow-sm">
                            <tr className="table-row">
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">ID</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Name</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Leaves Type</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Duration Type</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">date</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">From</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">To</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Reason</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Status</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                             text-white
                            border-none
                            ">Approved By</th>
                            </tr>
                        </thead>
                        <tbody className="table-body  divide-y divide-red-100 
                        dark:divide-slate-800
                        [&>*:nth-child(even)]:bg-red-50/40 
                        dark:[&>*:nth-child(even)]:bg-transparent">
                            {leaves.map((fullLeaves) => (
                                <tr key={fullLeaves.number} className="table-row text-sm">
                                    <td className="table-cell">{fullLeaves.number}</td>
                                    <td className="table-cell">
                                        <div className="flex w-max gap-x-4">
                                            <img
                                                src={fullLeaves.image}
                                                alt={fullLeaves.name}
                                                className="size-14 rounded-lg object-cover"
                                            />
                                            <div className="flex flex-col">
                                                <p>{fullLeaves.name}</p>
                                                <p className="font-normal text-slate-600 dark:text-slate-400">
                                                    {fullLeaves.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="table-cell">{fullLeaves.leaveType}</td>
                                    <td className="table-cell">First Half</td>
                                    <td className="table-cell">{fullLeaves.date}</td>
                                    <td className="table-cell">{fullLeaves.from}</td>
                                    <td className="table-cell">{fullLeaves.to}</td>
                                    <td className="table-cell">{fullLeaves.remainingDays}</td>
                                    <td className="table-cell">{fullLeaves.status}</td>
                                    <td className="table-cell">{fullLeaves.approvedby}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* WFH Table */}
            <div className="border border-red-100 dark:border-slate-700 rounded-xl py-2 px-0 ">
                {/* Heading */}
                <div className="  text-red-800 dark:text-slate-300
        p-4  text-lg font-semibold ">
                    Work From Home Status
                </div>
                <div className="relative w-full max-h-[400px] overflow-y-auto overflow-x-auto px-1  [scrollbar-width:_thin]">
                    <table className="table">
                        <thead className="table-header bg-gradient-to-r from-red-700 to-black text-white 
                        dark:bg-slate-800 dark:text-slate-200
                        sticky top-0 z-10 shadow-sm">
                            <tr className="table-row">
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">ID</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">Name</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">From</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">To</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">Days</th>
                                <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                ">Status</th>
                            </tr>
                        </thead>
                        <tbody className=" table-body divide-y divide-red-100 
            dark:divide-slate-800
            [&>*:nth-child(even)]:bg-red-50/40 
            dark:[&>*:nth-child(even)]:bg-transparent">
                            {remoteWork.map((remoteWorks) => (
                                <tr key={remoteWorks.number} className="table-row text-sm">
                                    <td className="table-cell">{remoteWorks.number}</td>
                                    <td className="table-cell">
                                        <div className="flex w-max gap-x-4">
                                            <img
                                                src={remoteWorks.image}
                                                alt={remoteWorks.name}
                                                className="size-14 rounded-lg object-cover"
                                            />
                                            <div className="flex flex-col">
                                                <p>{remoteWorks.name}</p>
                                                <p className="font-normal text-slate-600 dark:text-slate-400">
                                                    {remoteWorks.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="table-cell">{remoteWorks.from}</td>
                                    <td className="table-cell">{remoteWorks.to}</td>
                                    <td className="table-cell">{remoteWorks.days}</td>
                                    <td className="table-cell">{remoteWorks.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TeamDashboard;