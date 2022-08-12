import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from 'component/HomeComponent';
import Stack from '@mui/material/Stack';
import NavbarComponent from 'component/Navbar/NavbarComponent';
import Box from '@mui/material/Box';
function App() {
  return (

  <Stack>
    <NavbarComponent/>
      <Box sx={{width:"100vw", position: "relative", marginTop:"5rem"}} className="flex justify-center">
        <Routes>
          {/* If any page not match redirect to start page (insted of error page) */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Box>
  </Stack>
  );
}

export default App;
