
import { useState } from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard.jsx';
import StatusSection from './StatusSection.jsx';

function Header() {
  return (
    <header className="dashboard-header">
      <h1>Employee Directory</h1>
      <p>Manage employee details and availability</p>
    </header>
  );
}

function App() {
  const employee = {
    name: 'Aysha Nassar',
    designation: 'Software Developer Intern',
    department: 'AI & Data Science',
    location: 'Kochi, Kerala',
  };

  const [isAvailable, setIsAvailable] = useState(true);
  const [profileViews, setProfileViews] = useState(0);

  function viewEmployee(name) {
    setProfileViews((previousViews) => previousViews + 1);
    alert('Viewing profile of ' + name);
  }

  function showMessage() {
    alert('Welcome to the Employee Directory!');
  }

  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">
        <EmployeeCard
          employee={employee}
          onView={() => viewEmployee(employee.name)}
        />

        <StatusSection
          isAvailable={isAvailable}
          onToggle={() => setIsAvailable(!isAvailable)}
        />

        <section className="profile-views">
          <h3>Profile Views</h3>
          <p>{profileViews}</p>
        </section>

        <button className="message-button" onClick={showMessage}>
          Show Welcome Message
        </button>
      </main>
    </div>
  );
}

export default App;
