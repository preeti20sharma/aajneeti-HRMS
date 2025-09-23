// src/routes/AuthLayout.jsx
import PropTypes from "prop-types";


const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md  ">
                {children}
            </div>
        </div>
    );
};
AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;
