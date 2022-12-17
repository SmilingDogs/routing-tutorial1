import { NavLink } from "react-router-dom";

const Navigation = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black'
  });
    return (
      <nav className='nav'>
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/users" style={style}>Users</NavLink>
      </nav>
    );
  };

  export default Navigation;