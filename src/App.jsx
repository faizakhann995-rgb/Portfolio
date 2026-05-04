import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Hi, I'm Shopno 👋</h1>
        <p>Fullstack Developer (MERN)</p>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I build fullstack web applications using React, Node.js, and MongoDB.
          I love creating clean UI and scalable backend systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Client Manager App</h3>
            <p>Fullstack CRUD app with MongoDB + Express + React</p>
            
            <div className="links">
              <a
                href="https://client-backend-1hin.onrender.com/clients"
                target="_blank"
              >
                API
              </a>
              <a
                href="https://frontend-ten-sooty-58.vercel.app/"
                target="_blank"
              >
                Live App
              </a>
              <a
                href="https://github.com/faizakhann995-rgb/frontend"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
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
      <section className="section">
        <h2>Contact</h2>
        <p>programmershopno@gmail.com</p>
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