import { useState, createContext } from "react";
import { fakeAuth } from "../utils/fakeAPI";
import { useNavigate, useLocation } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);

        const origin = location.state?.from?.pathname || '/users';
        navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;