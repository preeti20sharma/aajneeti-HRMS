import AuthLayout from "../../authlayout/Authlayout";

const Register = () => {
    return (
        <AuthLayout>
            <div className=" flex items-center justify-center w-full mx-auto p-1  rounded-xl  text-slate-800 dark:text-slate-100">
                <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-1">Register</h3>
                    <p className="text-gray-500 text-center mb-4">Please enter your details to create account.</p>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="mt-1 w-full px-2 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="flex items-center space-x-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <span>
                                I agree to the{" "}
                                <a href="/terms" className="text-indigo-600 hover:underline">
                                    Terms & Conditions
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="text-indigo-600 hover:underline">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
                    </div>
                    {/* Register Button */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-200">
                        Register
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex space-x-2">
                        <button className="flex-1 py-1 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                            Facebook
                        </button>
                        <button className="flex-1 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
                            Google
                        </button>
                    </div>

                    {/* Login Redirect */}
                    <p className="text-center text-gray-600 mt-4 text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-indigo-600 font-medium hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;
