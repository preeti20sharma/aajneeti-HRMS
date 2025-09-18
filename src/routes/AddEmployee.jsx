import { useState } from "react";

export default function AddEmployee() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        employeeId: "",
        joiningDate: "",
        designation: "",
        employmentType: "",
        department: "",
        teamManager: "",
        teamleader: "",
        currency: "",
        amount: "",
        frequency: "",
        currentaddress: "",
        permanentadd: "",
        pincode: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Employee added!");
    };

    const inputClasses =
        "mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500";

    const labelClasses = "text-sm font-medium text-slate-700 dark:text-slate-200";

    return (
        <form
            onSubmit={handleSubmit}
            className=" mx-auto p-6 bg-slate-100 dark:bg-slate-950 rounded-xl shadow-md space-y-10 text-slate-900 dark:text-slate-100"
        >
            {/* Basic Details */}
            <div>
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">Basic Details</h2>
                <div className="flex flex-col items-center md:items-start">
                    <label className={`${labelClasses} mb-1`}>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="block text-sm text-slate-700 dark:text-slate-200"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">JPG or PNG, max 5MB</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                        <label className={labelClasses}>First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Email *</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Employment Details */}
            <div>
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">Employment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className={labelClasses}>Employee ID</label>
                        <input
                            type="text"
                            name="employeeId"
                            placeholder="Employee ID"
                            value={formData.employeeId}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Joining Date</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Designation</label>
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Employment Type</label>
                        <select
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Intern">Intern</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Teams and Department */}
            <div>
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">Teams and Department</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className={labelClasses}>Department</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className={inputClasses}
                        >
                            <option value="">Select</option>
                            <option value="Operation">Operation</option>
                            <option value="Development">Development</option>
                            <option value="Account">Account</option>
                            <option value="Sales">Sales</option>
                            <option value="SEO">SEO</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClasses}>Team Manager</label>
                        <select
                            name="teamManager"
                            value={formData.teamManager}
                            onChange={handleChange}
                            className={inputClasses}
                        >
                            <option value="">Select</option>
                            <option value="Manager1">Manager 1</option>
                            <option value="Manager2">Manager 2</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClasses}>Team Leader</label>
                        <select
                            name="teamleader"
                            value={formData.teamleader}
                            onChange={handleChange}
                            className={inputClasses}
                        >
                            <option value="">Select</option>
                            <option value="Team Leader 1">Team Leader 1</option>
                            <option value="Team Leader 2">Team Leader 2</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Salary Details */}
            <div>
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">Salary Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className={labelClasses}>Currency</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className={inputClasses}
                        >
                            <option value="">Select</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClasses}>Amount *</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Frequency</label>
                        <select
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleChange}
                            className={inputClasses}
                        >
                            <option value="">Select</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Address Details */}
            <div>
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-slate-700">Address Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className={labelClasses}>Current Address</label>
                        <input
                            type="text"
                            name="currentaddress"
                            placeholder="Current Address"
                            value={formData.currentaddress}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>Permanent Address</label>
                        <input
                            type="text"
                            name="permanentadd"
                            placeholder="Permanent Address"
                            value={formData.permanentadd}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClasses}>PIN Code</label>
                        <input
                            type="number"
                            name="pincode"
                            placeholder="PIN Code"
                            value={formData.pincode}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                >
                    Add Employee
                </button>
            </div>
        </form>
    );
}
