import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Start } from './component/Start';

function App() {
  return (

    <Routes>
      {/* If any page not match redirect to start page (insted of error page) */}
      <Route path="*" element={<Start />} />
      <Route path="/" element={<Start />} />
    </Routes>
  );
}

export default App;
