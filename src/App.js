import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from 'component/HomeComponent';

function App() {
  return (

    <Routes>
      {/* If any page not match redirect to start page (insted of error page) */}
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
