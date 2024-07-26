
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header.js';
import Dashboard from './pages/dashboard/Dashboard.js';


function App() {
  return (
    <>
   <Header />
   <Routes>
        <Route path="/" element={<Dashboard />} />
   </Routes>
   </>
  );
}

export default App;
