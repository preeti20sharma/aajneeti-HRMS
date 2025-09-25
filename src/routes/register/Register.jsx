import { FaFacebookF } from "react-icons/fa";
import AuthLayout from "../../authlayout/Authlayout";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <AuthLayout>
            <div className="flex items-center justify-center w-full mx-auto p-1  min-h-screen ">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 w-full max-w-md transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
                        Register
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-center mb-4">
                        Please enter your details to create account.
                    </p>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="mt-1 w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="mb-2">
                        <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-500"
                            />
                            <span>
                                I agree to the{" "}
                                <a href="/terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                                    Terms & Conditions
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-200">
                        Register
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                        <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 transition hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FaFacebookF className="text-blue-600" />
                            Facebook
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 transition hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FcGoogle />
                            Google
                        </button>
                    </div>

                    {/* Login Redirect */}
                    <p className="text-center text-gray-600 dark:text-gray-300 mt-2 text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;
