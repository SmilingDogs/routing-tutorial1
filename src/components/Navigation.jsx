import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../App";

const Navigation = () => {
  const { token, onLogout } = useContext(AuthContext);

  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black'
  }); //* this is built-in styling of active links, we pass style obj as prop to the Navlink components
    return (
      <nav className='nav'>
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/users" style={style}>Users</NavLink>
        <NavLink to="/notes" style={style}>Personal Notes</NavLink>
        {token && (
        <button type="button" onClick={onLogout}>Sign Out</button>
      )}
      </nav>
    );
  };

  export default Navigation;