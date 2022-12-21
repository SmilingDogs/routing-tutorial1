import { Routes, Route, useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import { fakeAuth } from './utils/fakeAPI';

const initialUsers = [
  { id: '1', fullName: 'Robin Wieruch' },
  { id: '2', fullName: 'Sarah Finnley' },
];

export const AuthContext = createContext(null);

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialUsers);
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate('/users');
  };


  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<Home onLogin={handleLogin} />} />
            <Route path="home" element={<Home onLogin={handleLogin} />} />
            <Route path="users" element={<Users users={users} />}>
              <Route path=":userId" element={<User onRemoveUser={handleRemoveUser} />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
};
//* the Parential Route (with Layout) must have a closing tag. Children - are single self-closing


export default App;
