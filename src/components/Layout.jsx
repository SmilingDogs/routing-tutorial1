import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../App";
import Navigation from "./Navigation";

const Layout = () => {
  const {token, setToken} = useContext(AuthContext);

  const handleLogout = () => {
    setToken(null);
  };
  return (
    <>
    <h1>React Router</h1>
    <Navigation onLogout={handleLogout} token={token} />

    <main style={{ padding: '1rem 0' }}>
        <Outlet />
    </main>
    </>
  )
}
//<Outlet /> is just a place holder for all child elements (nested elements) e.g. where to place a child element
//* We can move all static components to the Layout (e.g. <h1></h1>, <Navigation />)
export default Layout;