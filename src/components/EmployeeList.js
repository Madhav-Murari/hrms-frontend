import { deleteEmployee } from "../services/api";

export default function EmployeeList({ employees, refresh }) {
  const remove = async (id) => {
    await deleteEmployee(id);
    refresh();
  };

  return (
    <div className="card">
      <h3>Employees</h3>
      {employees.map((e) => (
        <div key={e._id} className="row">
          <span>{e.fullName} ({e.department})</span>
          <button onClick={() => remove(e._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
