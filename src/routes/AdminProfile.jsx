import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileImage from "@/assets/profile-image.jpg";


const AdminProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // admin data passed from Empdashboard
    const { admin } = location.state || {};

    const [formData, setFormData] = useState({
        name: admin?.name || "",
        email: admin?.email || "",
        phone: admin?.phone || "",
        position: admin?.position || "",
        image: admin?.image || "",
        adminID: admin?.adminID || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated admin:", formData);
        // here you can call API to save changes
        navigate("/dashboard"); // redirect back to dashboard after save
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100">
            <h2 className="text-2xl font-bold mb-4">Edit Admin Profile</h2>

            <form
                onSubmit={handleSubmit}
                className="p-6 rounded-xl shadow space-y-4 w-full "
            >
                <div className="flex flex-col  gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <img
                            src={formData.image || ProfileImage}
                            alt={formData.name || "Profile"}
                            className="size-16 rounded-xl object-cover shadow-md"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{formData.name}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{formData.position}</p>
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-30"
                    />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Name */}
                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {/* Admin ID */}
                    <div>
                        <label className="block font-semibold mb-1">Admin ID</label>
                        <input
                            type="text"
                            name="adminID"
                            value={formData.adminID}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {/* Designation */}
                    <div>
                        <label className="block font-semibold mb-1">Designation</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Email */}
                    <div>
                        <label className="block font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {/* Phone */}
                    <div>
                        <label className="block font-semibold mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            onClick={() => navigate(-1)}
                            className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-800"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="bg-gray-300 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdminProfile;
