import Info from "./Info.jsx";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar.jsx";
import { Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Info />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
    </>
  );
};

export default App;