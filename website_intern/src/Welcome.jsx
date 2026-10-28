function Welcome() {
  return (
    <section className="welcome" id="home">
      <div className="welcome-content">
        <p className="welcome-label">
          YOUR NEXT CHAPTER STARTS HERE
        </p>

        <h1>
          Start Your
          <br />
          Internship Journey
        </h1>

        <p className="welcome-description">
          Discover opportunities, build real-world skills, and grow with
          a team that supports your future.
        </p>
      </div>

      <button
        className="welcome-button"
        onClick={() =>
          document.getElementById('interns')?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Explore Interns
      </button>
    </section>
  )
}

export default Welcome
