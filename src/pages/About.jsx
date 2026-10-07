import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about">
      <section className="about__hero">
        <p className="about__eyebrow">The Story Behind the Dex</p>
        <h1 className="about__title">
          ABOUT <span>SHINYDEX</span>
        </h1>
        <p className="about__tagline">
          Two passions. Two beginnings. One evolution.
        </p>
        <p className="about__intro">
          ShinyDex was created from an immense passion for Pokémon and a
          newfound passion for coding — bringing both journeys together in one
          place.
        </p>
      </section>

      <section className="about__story">
        <article className="about__panel">
          <span className="about__number">01</span>
          <p className="about__label">The Project</p>
          <h2>Where It Started</h2>
          <p>
            The original ShinyDex was built to catalog a beginning: the first
            151 Pokémon of the Kanto region.
          </p>
          <p>
            But Kanto wasn't the only beginning being documented. ShinyDex
            Classic was also built at the beginning of my own development
            journey using the fundamentals I had learned — HTML, CSS, and
            Vanilla JavaScript.
          </p>
          <p>
            It became a way to showcase two things I genuinely love: the world
            of Pokémon and the process of learning how to build something of my
            own.
          </p>
        </article>

        <article className="about__panel about__panel--evolution">
          <span className="about__number">02</span>
          <p className="about__label">The Evolution</p>
          <h2>Classic → 2.0</h2>
          <p>
            ShinyDex 2.0 is exactly what it sounds like — the evolution of the
            original ShinyDex.
          </p>
          <p>
            In a surprisingly short amount of time, the project grew alongside
            my development skills. React gave me a much more powerful way to
            think about applications: reusable components, state-driven
            interfaces, dynamic data, routing, and scalable architecture.
          </p>
          <div className="evolution">
            <div className="evolution__stage">
              <span>SHINYDEX</span>
              <strong>CLASSIC</strong>
              <small>HTML · CSS · JavaScript</small>
            </div>
            <div className="evolution__arrow">
              <span>EVOLVE</span>
              <div className="evolution__line"></div>
              <span className="evolution__chevron">↓</span>
            </div>
            <div className="evolution__stage evolution__stage--current">
              <span>SHINYDEX</span>
              <strong>2.0</strong>
              <small>React · State · APIs · Routing</small>
            </div>
          </div>
        </article>
      </section>

      <section className="about__tech">
        <p className="about__label">Under the Hood</p>
        <h2>Built With</h2>
        <div className="about__tech-grid">
          <div className="tech__item">
            <span>React</span>
            <small>Component Architecture</small>
          </div>
          <div className="tech__item">
            <span>PokéAPI</span>
            <small>Dynamic Pokémon Data</small>
          </div>
          <div className="tech__item">
            <span>React Router</span>
            <small>Dynamic Page Routing</small>
          </div>
          <div className="tech__item">
            <span>CSS3</span>
            <small>Responsive UI / UX</small>
          </div>
        </div>
      </section>

      <section className="about__features">
        <div className="about__features-heading">
          <p className="about__label">What's 2.0?</p>
          <h2>More Than a Rebuild.</h2>
          <p>
            ShinyDex 2.0 expands the original concept into a dynamic React
            application, with plenty of shiny gems hiding in plain sight.
          </p>
        </div>
        <div className="features__grid">
          <article className="feature">
            <span>01</span>
            <h3>Dynamic Regions</h3>
            <p>
              Region data drives reusable routes, Pokémon ranges, and page
              content without requiring separate pages for every generation.
            </p>
          </article>

          <article className="feature">
            <span>02</span>
            <h3>Reusable Components</h3>
            <p>
              Pokémon cards, grids, navigation, loading states, and interface
              elements are built as reusable React components.
            </p>
          </article>

          <article className="feature">
            <span>03</span>
            <h3>Expanded API Data</h3>
            <p>
              Reusable asynchronous API utilities dynamically retrieve Pokémon
              across multiple generations instead of limiting the Dex to Kanto.
            </p>
          </article>

          <article className="feature">
            <span>04</span>
            <h3>State-Driven UI</h3>
            <p>
              React state and effects control data loading, region changes, and
              interface behavior without directly manipulating the DOM.
            </p>
          </article>

          <article className="feature">
            <span>05</span>
            <h3>Loading Experience</h3>
            <p>
              Animated skeleton cards provide responsive visual feedback while
              Pokémon data is retrieved and prepared for display.
            </p>
          </article>

          <article className="feature">
            <span>06</span>
            <h3>UI / UX Evolution</h3>
            <p>
              Responsive layouts, active navigation states, interactive region
              controls, animations, and visual feedback create a more complete
              Pokédex experience.
            </p>
          </article>
        </div>
      </section>

      <section className="about__developer">
        <p className="about__label">The Developer</p>
        <h2>Still Evolving.</h2>
        <p className="about__developer-copy">
          I'm currently designing websites locally while continuing to build my
          skills as a developer. I'm proud of where I started, excited about
          where I am, and even more excited about where I'm going.
        </p>
        <p className="about__developer-purpose">For my family.</p>
        <div className="about__actions">
          <Link to="/pokedex" className="about__button about__button--primary">
            Explore the Pokédex
          </Link>
          <a
            href="https://github.com/Cryologix22/shiny-dex-w-react"
            target="_blank"
            rel="noreferrer"
            className="about__button"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
