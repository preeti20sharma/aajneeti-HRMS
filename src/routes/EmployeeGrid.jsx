import { allEmployees } from "@/constants";
import PropTypes from "prop-types";



const EmployeeCard = ({ employee }) => {
    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl shadow-md overflow-hidden p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
            <div className="bg-gradient-to-r from-slate-200 to-blue-200 dark:from-slate-800 dark:to-blue-900 rounded-t-xl h-28 -mx-6 -mt-6 mb-6 flex items-end justify-center">
                <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-28 h-28 rounded-full border-4 -mb-12 dark:border-slate-900"
                />
            </div>

            <h2 className="mt-14 text-lg font-semibold text-gray-800 dark:text-gray-100">
                {employee.name}
            </h2>

            <a
                href={`mailto:${employee.email}`}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 mb-4 block"
            >
                {employee.email}
            </a>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-left mt-4">
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Employee ID</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.employeeId}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Designation</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.position}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Current Address</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.currentAddress}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Permanent Address</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.permanentAddress}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Fathers Name</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.fatherName}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Local Guardian</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.localGuardian}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Manager Name</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.managerName}</p>
                </div>
                <div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Joining Date</p>
                    <p className="text-gray-800 dark:text-gray-100">{employee.joiningDate}</p>
                </div>
            </div>
        </div>

    );
};

EmployeeCard.propTypes = {
    employee: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        employeeId: PropTypes.string.isRequired,
        currentAddress: PropTypes.string.isRequired,
        permanentAddress: PropTypes.string.isRequired,
        fatherName: PropTypes.string.isRequired,
        localGuardian: PropTypes.string.isRequired,
        managerName: PropTypes.string.isRequired,
        joiningDate: PropTypes.string.isRequired,
    }).isRequired,
};

const EmployeeGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-1">
                {allEmployees.map((employee, index) => (
                    <EmployeeCard key={index} employee={employee} />
                ))}
            </div>
        </div>
    )
}



export default EmployeeGrid
