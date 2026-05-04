import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Shopno.dev</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Hi, I'm <span>Shopno Ahmed</span> 👋
        </h1>
        <p>Fullstack Developer (MERN)</p>
        <div className="hero-btns">
          <a href="#projects" className="btn primary">
            View Work
          </a>
          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Client Manager App</h3>
            <p>Fullstack CRUD app with React, Node, MongoDB</p>

            <div className="card-links">
              <a href="https://client-backend-1hin.onrender.com/users" target="_blank">API</a>
              <a href="https://frontend-ten-sooty-58.vercel.app/" target="_blank">Live</a>
              <a href="https://github.com/faizakhann995-rgb/frontend" target="_blank">Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>Email: programmershopno@gmail.com</p>
        <p>GitHub: github.com/faizakhann995-rgb</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Shopno Ahmed</p>
      </footer>
    </div>
  );
}

export default App;