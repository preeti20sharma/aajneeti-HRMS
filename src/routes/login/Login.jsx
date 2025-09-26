import AuthLayout from "../../authlayout/Authlayout";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import backimg from "@/assets/aajneeti.jpg";
import logo from "@/assets/logo.jpg";

const Login = () => {
    return (
        <AuthLayout>
            <div className="flex w-full min-h-screen">
                {/* Left Side - Background Image */}
                <div className="hidden md:block w-1/2">
                    <img
                        src={backimg}
                        alt="Login Illustration"
                        className="w-full h-full object-cover rounded-l-2xl"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col w-full md:w-1/2 items-center justify-center bg-white dark:bg-gray-800">
                    <div >
                        <a href="/">
                            <img src={logo} alt="Logo" className="h-12  mx-auto mb-1" />
                        </a>
                    </div>
                    <div className=" rounded-2xl  w-full max-w-md transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
                            Login
                        </h3>
                        <p className="text-gray-500 dark:text-gray-300 text-center mb-4">
                            Please enter below details to access the dashboard.
                        </p>

                        {/* Email */}
                        <div className="mb-4">
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

                        {/* Remember & Forgot */}
                        <div className="flex justify-between mb-4">
                            <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-500"
                                />
                                <span>Remember me</span>
                            </label>
                            <div>
                                <a
                                    href="#"
                                    className="text-sm cursor-pointer text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                                >
                                    Forgot password
                                </a>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-200">
                            Login
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

                        {/* Redirect */}
                        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 text-sm">
                            Don’t have an account yet?{" "}
                            <a
                                href="/register"
                                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
