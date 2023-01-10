import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Home = () => {
  const { token, onLogin } = useContext(AuthContext);
  return (
    <>
      <h2>Home (Public)</h2>
      {!token && <button type="button" onClick={onLogin}>
        Sign In
      </button>}
    </>
  );
};

export default Home;