import { useState } from "react";
import { addEmployee } from "../services/api";

export default function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    setForm({ employeeId: "", fullName: "", email: "", department: "" });
    refresh();
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Add Employee</h3>
      <input placeholder="Employee ID" required
        value={form.employeeId}
        onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
      />
      <input placeholder="Full Name" required
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />
      <input placeholder="Email" required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input placeholder="Department" required
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
}
