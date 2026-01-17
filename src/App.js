import { useEffect, useState } from "react";
import { getEmployees } from "./services/api";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([]);

  const load = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container">
      <h1>HRMS Lite</h1>
      <Dashboard employees={employees} />
      <EmployeeForm refresh={load} />
      <EmployeeList employees={employees} refresh={load} />
      <AttendanceForm employees={employees} />
      <AttendanceList employees={employees} />
    </div>
  );
}
