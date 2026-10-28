
function StatusSection({ isAvailable, onToggle }) {
  return (
    <section className="status-section">
      <h3>Employee Availability</h3>

      <p className={isAvailable ? "status available" : "status unavailable"}>
        {isAvailable ? "Available for Work" : "Currently Unavailable"}
      </p>

      {isAvailable && (
        <p className="availability-message">
          This employee is ready to take on new tasks.
        </p>
      )}

      <button onClick={onToggle}>
        Set {isAvailable ? "Unavailable" : "Available"}
      </button>
    </section>
  );
}

export default StatusSection;
