import Navbar from "./Components/Navbar";
import { Routes, Route} from "react-router-dom";
import Employees from "./Pages/Employees";
import Home from "./Pages/Home";
import { useState } from "react";
import AddEmployees  from "./Pages/AddEmployee";

function App () {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employees"
          element={
            <Employees
              employees={employees}
              setEmployees={setEmployees}
              setEditEmployee={setEditEmployee}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddEmployees
              employees={employees}
              setEmployees={setEmployees}
              editEmployee={editEmployee}
              setEditEmployee={setEditEmployee}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;