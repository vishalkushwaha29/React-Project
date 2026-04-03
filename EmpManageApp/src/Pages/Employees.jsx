import { useNavigate } from "react-router-dom";

const Employees = ({ employees, setEmployees, setEditEmployee }) => {
    
const navigate = useNavigate();
  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };
  return (
    <>
      <div className="container mt-5 w-75 employees-list-container">
        <h2 className="list-heading">Employees List</h2>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>

                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => {setEditEmployee(emp); navigate("/add");}}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employees;
