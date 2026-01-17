export default function Dashboard({ employees }) {
  return (
    <div className="card">
      <h3>Dashboard</h3>
      <p>Total Employees: {employees.length}</p>
    </div>
  );
}
