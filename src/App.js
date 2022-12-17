import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import NoMatch from './pages/NoMatch';
import User from './pages/User';

const initialUsers = [
  { id: '1', fullName: 'Robin Wieruch' },
  { id: '2', fullName: 'Sarah Finnley' },
];

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialUsers);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate('/users');
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users}/>}>
            <Route path=":userId" element={<User onRemoveUser = {handleRemoveUser} />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};
//* the Parential Route (with Layout) must have a closing tag. Children - are single self-closing


export default App;
