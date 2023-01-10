import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const ProtectedRoute = ({ children }) => {

    const { token } = useContext(AuthContext);
    const location = useLocation();
    
    if (!token) {
      return <Navigate to="/home" replace state={{ from: location }} />;
    }

    return children;
  };

  export default ProtectedRoute;