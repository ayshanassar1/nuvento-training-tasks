
function EmployeeCard({ employee, onView }) {
  const { name, designation, department, location } = employee;

  return (
    <div className="employee-card">
      <div
        className="employee-avatar"
        style={{ backgroundColor: "#dbeafe" }}
      >
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>
      <p className="designation">{designation}</p>

      <div className="employee-details">
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>

      <button onClick={onView}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
