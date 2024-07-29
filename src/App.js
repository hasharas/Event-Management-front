
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import NoMatch from './pages/noMatch/NoMatch.js';
import PostUser from './pages/employee/PostUser.js';
import UpdateUser from './pages/employee/UpdateUser.js';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<PostUser />} />
        <Route path="/employee/:id" element={<UpdateUser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
