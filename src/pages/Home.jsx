import { useContext } from "react";
import { AuthContext } from "../App";

const Home = ({ onLogin}) => {
  const {token} = useContext(AuthContext);
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