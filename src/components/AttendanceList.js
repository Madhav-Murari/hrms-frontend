import { useState } from "react";
import { getAttendance } from "../services/api";

export default function AttendanceList({ employees }) {
  const [records, setRecords] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const load = async (employeeId) => {
    if (!employeeId) return setRecords([]); // reset if nothing selected
    try {
      const res = await getAttendance(employeeId);
      setRecords(res.data);
    } catch (error) {
      console.error("Error fetching attendance:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to fetch attendance");
      setRecords([]);
    }
  };

  return (
    <div className="card">
      <h3>Attendance Records</h3>

      <select
        value={selectedEmployee}
        onChange={(e) => {
          const empId = e.target.value;
          setSelectedEmployee(empId);
          load(empId);
        }}
      >
        <option value="">Select Employee</option>
        {employees.map((e) => (
          <option key={e._id} value={e.employeeId}>
            {e.fullName}
          </option>
        ))}
      </select>

      {records.length === 0 ? (
        <p>No attendance records found</p>
      ) : (
        <ul>
          {records.map((r) => (
            <li key={r._id}>
              {new Date(r.date).toDateString()} — {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
