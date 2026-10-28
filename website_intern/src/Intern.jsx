
function Intern() {
  const interns = [
    {
      id: 'INT076',
      name: 'Ann Grace Francis',
      role: 'Software Developing Intern',
    },
    {
      id: 'INT085',
      name: 'Aysha Nassar',
      role: 'AI & DS Intern',
    },
    {
      id: 'INT096',
      name: 'Muhsina Nassar',
      role: 'Python Intern',
    },
  ]

  return (
    <section className="interns-section" id="interns">
      <div className="page">
        <p className="intro">MEET THE TEAM</p>
        <h2>Our Interns</h2>
        <p className="intro">
          Get to know our interns and their roles.
        </p>

        <div className="product-grid">
          {interns.map((intern) => (
            <article className="product-card" key={intern.id}>
              <div className="intern-avatar">
                {intern.name.charAt(0)}
              </div>

              <h3>{intern.name}</h3>
              <p>{intern.role}</p>

              <span className="category">
                {intern.id}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Intern
