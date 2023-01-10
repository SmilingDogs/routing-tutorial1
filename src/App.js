import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import PersonalNotes from './pages/PersonalNotes';

const initialUsers = [
  { id: '1', fullName: 'Sylvester Stallone' },
  { id: '2', fullName: 'Chuck Norris' },
  { id: '3', fullName: 'Jason Statham' },
  { id: '4', fullName: 'Bruce Lee' },
  { id: '5', fullName: 'Jackie Chan' },
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
      <AuthProvider>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<ProtectedRoute><Users users={users} /></ProtectedRoute>}>
              <Route path=":userId" element={<User onRemoveUser={handleRemoveUser} />} />
            </Route>
            <Route path="notes" element={<ProtectedRoute><PersonalNotes /></ProtectedRoute>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
//* the Parential Route (with Layout) must have a closing tag. Children - are single self-closing
//* AuthProvider - Auth context wrapper where we take out all auth logic

export default App;
