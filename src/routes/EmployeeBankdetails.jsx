import { useState } from "react";
import {
    Banknote,
    CreditCard,
    KeyRound,
    MapPin,
    User,
    Building2,
    Pencil,
    X,
} from "lucide-react";

const EmployeeBankdetails = () => {
    // Initial bank details (yahin se API ka data baad me set kar sakte ho)
    const [bankDetails, setBankDetails] = useState({
        holderName: "Preeti Sharma",
        bankName: "State Bank of India",
        accountNumber: "XXXXXXXX1234",
        ifscCode: "SBIN0123456",
        branch: "Civil Lines, Bareilly",
        accountType: "Savings",
    });

    const [personalDetails, setPersonalDetails] = useState({
        name: "Preeti Sharma",
        mobileNO: "6396634822",
        emailID: "preetiaajneeti@gmail.com",
        city: "Aligarh",
        permanentAddress: "Aligarh, 202130",
        currentAddress: "sector 63, Noida, 201301",
        guardianMobileNo: "6396634822",
    });


    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);

    const [formData, setFormData] = useState(bankDetails);
    const [personalData, setpersonalData] = useState(personalDetails);

    const openEditModal = () => {
        setFormData(bankDetails); // current values load in form
        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const openEditpersonalModal = () => {
        setpersonalData(personalDetails); // current values load in form
        setIsPersonalModalOpen(true);
    };

    const closeEditpersonalModal = () => {
        setIsPersonalModalOpen(false);
    };

    const handlepersonalChange = (e) => {
        const { name, value } = e.target;
        setpersonalData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        setBankDetails(formData);
        setIsEditOpen(false);
    };
    const handlepersonalSave = (e) => {
        e.preventDefault();
        setPersonalDetails(personalData);
        setIsPersonalModalOpen(false);
    };

    return (
        <div className="p-6 w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">

            {/* PAGE HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent dark:bg-none dark:text-slate-200">
                        Employee Bank Details
                    </h1>
                    {/* Red underline */}
                    <div className="h-1 w-32 bg-gradient-to-r from-red-800 to-transparent rounded-full mt-1" />
                </div>

                {/* Edit button */}
                <button
                    onClick={openEditModal}
                    className="inline-flex items-center gap-2 rounded-lg 
                    bg-gradient-to-r from-red-800 to-black 
                    hover:from-black hover:to-red-800 
                    text-white px-4 py-2 text-sm font-medium 
                    transition-all duration-300"
                >
                    <Pencil className="w-4 h-4" />
                    Edit Bank Details
                </button>
            </div>

            {/* FIELDS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                {/* Account Holder Name */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent  rounded-md transition-colors">
                    <span className="mt-1">
                        <User className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide 
               bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent
               dark:bg-none dark:text-slate-200">
                            Account Holder Name
                        </p>

                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.holderName}
                        </p>
                    </div>
                </div>

                {/* Bank Name */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <Building2 className="w-5 h-5 text-red-800 dark:text-slate-200 " />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Bank Name
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.bankName}
                        </p>
                    </div>
                </div>

                {/* Account Number */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <CreditCard className="w-5 h-5 text-red-800  dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Account Number
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.accountNumber}
                        </p>
                    </div>
                </div>

                {/* IFSC Code */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <KeyRound className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            IFSC Code
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.ifscCode}
                        </p>
                    </div>
                </div>

                {/* Branch */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <MapPin className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Branch
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.branch}
                        </p>
                    </div>
                </div>

                {/* Account Type */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <Banknote className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Account Type
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {bankDetails.accountType}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors cursor-pointer">
                    <span className="mt-1">
                        <Banknote className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div className="w-full">
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Upload Aadhar card
                        </p>
                        {/* FILE INPUT */}
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => console.log("Selected File:", e.target.files[0])}
                            className="mt-1 w-full text-gray-800 dark:text-slate-400 font-semibold
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0
                       file:bg-red-800 file:text-white 
                       file:text-sm file:font-semibold 
                       hover:file:bg-black transition-all"
                        />
                    </div>
                </div>
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors cursor-pointer">
                    <span className="mt-1">
                        <Banknote className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div className="w-full">
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Upload PAN card
                        </p>
                        {/* FILE INPUT */}
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => console.log("Selected File:", e.target.files[0])}
                            className="mt-1 w-full text-gray-800 dark:text-slate-400  font-semibold
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0
                       file:bg-red-800 file:text-white 
                       file:text-sm file:font-semibold 
                       hover:file:bg-black transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* EDIT MODAL */}
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-lg shadow-lg">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-red-800 dark:text-slate-200">
                                Edit Bank Details
                            </h2>
                            <button
                                onClick={closeEditModal}
                                className="p-1 rounded-full hover:bg-red-50 
                                dark:hover:bg-slate-700 
                                dark:hover:text-red-300"
                            >
                                <X className="w-5 h-5 text-red-100" />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSave} className="space-y-4">

                            {/* 2 fields in one row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Account Holder Name
                                    </label>
                                    <input
                                        type="text"
                                        name="holderName"
                                        value={formData.holderName}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 dark:text-slate-400 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            {/* Next row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Account Number
                                    </label>
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        value={formData.accountNumber}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        IFSC Code
                                    </label>
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        value={formData.ifscCode}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>
                            </div>
                            {/* Next row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Branch
                                    </label>
                                    <input
                                        type="text"
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Account Type
                                    </label>
                                    <input
                                        type="text"
                                        name="accountType"
                                        value={formData.accountType}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>
                            </div>
                            {/* BUTTONS */}
                            <div className="flex justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Employee Personal Details */}

            {/* PAGE HEADER */}
            <div className="flex items-center justify-between mt-12 mb-6">
                <div>
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                        Employee Personal Information
                    </h1>
                    {/* Red underline */}
                    <div className="h-1 w-32 bg-gradient-to-r from-red-800 to-transparent rounded-full mt-1" />
                </div>

                {/* Edit button */}
                <button
                    onClick={openEditpersonalModal}
                    className="inline-flex items-center gap-2 rounded-lg 
                    bg-gradient-to-r from-red-800 to-black 
                    hover:from-black hover:to-red-800
                    text-white px-4 py-2 text-sm font-medium 
                    transition-all duration-300"
                >
                    <Pencil className="w-4 h-4" />
                    Edit Personal Details
                </button>
            </div>
            {/* FIELDS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                {/* Employee Name */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <User className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Employee Name
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.name}
                        </p>
                    </div>
                </div>

                {/* Mobile number */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <Building2 className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Mobile No.
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.mobileNO}
                        </p>
                    </div>
                </div>

                {/* Email ID */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <CreditCard className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Email ID
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.emailID}
                        </p>
                    </div>
                </div>

                {/* City */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <KeyRound className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            City
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.city}
                        </p>
                    </div>
                </div>

                {/*  Permanent Address */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <MapPin className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Permanent Address
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.permanentAddress}
                        </p>
                    </div>
                </div>

                {/* Current Address */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <MapPin className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            Current Address
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.currentAddress}
                        </p>
                    </div>
                </div>
                {/* Account Type */}
                <div className="flex items-start gap-3 border-b border-red-200 pb-4 hover:bg-red-50/70 dark:hover:bg-transparent rounded-md transition-colors">
                    <span className="mt-1">
                        <Banknote className="w-5 h-5 text-red-800 dark:text-slate-200" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-red-800 to-black bg-clip-text text-transparent  dark:bg-none dark:text-slate-200">
                            guaradian Mobile No.
                        </p>
                        <p className="text-gray-800 dark:text-slate-400 font-semibold">
                            {personalDetails.guardianMobileNo}
                        </p>
                    </div>
                </div>
            </div>
            {/* EDIT MODAL */}
            {isPersonalModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-lg shadow-lg">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-red-800 dark:text-slate-200">
                                Edit Personal Details
                            </h2>
                            <button
                                onClick={closeEditpersonalModal}
                                className="p-1 rounded-full 
                                hover:bg-red-50 
                                dark:hover:bg-slate-700 
                                dark:hover:text-red-300" >
                                <X className="w-5 h-5 text-red-100" />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handlepersonalSave} className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={personalData.name}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        name="mobileNO"
                                        value={personalData.mobileNO}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Email ID
                                    </label>
                                    <input
                                        type="email"
                                        name="emailID"
                                        value={personalData.emailID}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={personalData.city}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Permanent Address
                                    </label>
                                    <input
                                        type="text"
                                        name="permanentAddress"
                                        value={personalData.permanentAddress}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Current Address
                                    </label>
                                    <input
                                        type="text"
                                        name="currentAddress"
                                        value={personalData.currentAddress}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700 "
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400 mb-1">
                                        Guardian Mobile No.
                                    </label>
                                    <input
                                        type="text"
                                        name="guardianMobileNo"
                                        value={personalData.guardianMobileNo}
                                        onChange={handlepersonalChange}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-red-800 dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={closeEditpersonalModal}
                                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-slate-200 "
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-full bg-gradient-to-r from-red-800 to-black px-5 py-2 text-sm font-semibold text-white hover:bg-none hover:bg-red-800"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeBankdetails;
