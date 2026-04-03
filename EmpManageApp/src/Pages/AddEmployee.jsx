import { useState, useEffect } from "react";

const AddEmployees = ({
  employees,
  setEmployees,
  editEmployee,
  setEditEmployee,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (editEmployee) {
      setFormData(editEmployee); // auto-fill
    } else {
      setFormData({ name: "", email: "", role: "" }); // clear form
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editEmployee) {
      // Update existing employee
      const updatedEmployees = employees.map((emp) =>
        emp.id === editEmployee.id ? { ...emp, ...formData } : emp,
      );
      setEmployees(updatedEmployees);
      setEditEmployee(null); // Clear edit mode
    } else {
      // Add new employee
      const newEmployee = {
        id: Date.now(), // unique id
        ...formData,
      };
      setEmployees([...employees, newEmployee]);
    }

    // Reset form
    setFormData({ name: "", email: "", role: "" });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        {editEmployee ? "Edit Employee" : "Add Employee"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="form-control mb-3"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Enter Role"
          className="form-control mb-3"
          value={formData.role}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          {editEmployee ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default AddEmployees;
