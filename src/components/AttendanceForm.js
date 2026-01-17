import { useState } from "react";
import { markAttendance } from "../services/api";

export default function AttendanceForm({ employees }) {
  const [data, setData] = useState({
    employeeId: "", // changed from 'employee'
    date: "",
    status: "Present",
  });

  const submit = async (e) => {
    e.preventDefault();
    await markAttendance(data); // sends { employeeId, date, status }
    alert("Attendance marked");
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Mark Attendance</h3>

      <select
        required
        onChange={(e) => setData({ ...data, employeeId: e.target.value })}
      >
        <option value="">Select Employee</option>
        {employees.map((e) => (
          <option key={e._id} value={e.employeeId}> {/* send employeeId, not _id */}
            {e.fullName}
          </option>
        ))}
      </select>

      <input
        type="date"
        required
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <select onChange={(e) => setData({ ...data, status: e.target.value })}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button>Submit</button>
    </form>
  );
}
