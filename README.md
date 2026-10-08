# ✨ ShinyDex 2.0

### Every Generation. Every Pokémon. Every Shiny.

A modern, responsive Pokémon Pokédex built with **React**, featuring all nine generations, interactive Pokémon collections, shiny sprites, and live data from the PokéAPI.

**[🌐 Live Demo](https://shiny-dex-w-react.vercel.app/)** | **[💻 GitHub Repository](https://github.com/Cryologix22/shiny-dex-w-react)**

---

## 📖 About the Project

ShinyDex 2.0 is a complete React rebuild and expansion of my original vanilla JavaScript project, ShinyDex.

What began as a Pokédex featuring the original 151 Pokémon from Kanto evolved into a nine-generation experience, showcasing Pokémon #001 through #1025.

The goal was to create an engaging, visually distinctive application while putting my growing front-end development skills into practice.

Rather than simply reproducing the original project, I rebuilt its architecture around reusable React components, dynamic routing, API-driven content, and responsive layouts.

**[Explore the Original ShinyDex](https://cryologix22.github.io/shiny-dex/)**

## 🚀 Features

- **Nine Pokémon Generations:** Explore Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, and Paldea.
- **1,025 Pokémon:** Browse species across all nine generations, organized into regional collections.
- **Shiny Pokémon Sprites:** Discover alternate shiny appearances using PokéAPI sprite data.
- **Featured Pokémon:** Highlight randomly selected Pokémon and discover another with a single click.
- **Search and Filtering:** Find Pokémon by name or Pokédex number and filter the Kanto collection by type.
- **Interactive Region Navigation:** Move between generations using a custom navigation rail.
- **Pokémon Details:** View type information, height, weight, and available Pokémon cries.
- **Custom Loading States:** Animated skeleton cards provide visual feedback while Pokémon data loads.
- **Responsive Design:** Layouts adapt to desktop, tablet, and mobile screens.
- **Custom Visual Design:** Region maps, glowing accents, animations, and a Pokémon-inspired interface.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript (ES6+) | Application logic and asynchronous data handling |
| React Router | Client-side navigation and dynamic region routes |
| PokéAPI | Pokémon data, sprites, types, and cries |
| HTML5 / JSX | Semantic markup and component structure |
| CSS3 | Responsive layouts, animations, and custom styling |
| Git & GitHub | Version control and source management |
| Vercel | Production deployment |

The project was bootstrapped with **Create React App**.

## 🧠 Technical Highlights

### Reusable Component Architecture

ShinyDex 2.0 separates the interface into reusable components, including Pokémon cards, collection grids, navigation, loading skeletons, and region cards.

This approach reduces duplicated markup and makes the application easier to maintain and expand.

### Dynamic Pokémon Data

Pokémon information is retrieved from the PokéAPI using asynchronous JavaScript functions.

The application uses `fetch()`, `async/await`, and `Promise.all()` to retrieve and display regional collections.

### React State and Effects

React's `useState` and `useEffect` hooks manage Pokémon data, loading states, search inputs, filters, and component lifecycle behavior.

### Data-Driven Regional Navigation

Regional information is maintained in a centralized data structure containing each region's name, generation, Pokédex range, and description.

Dynamic React Router paths allow the application to render different regional collections through a shared page architecture.

### Responsive UI and Custom Animations

The interface uses CSS Grid, Flexbox, media queries, transitions, keyframe animations, and custom visual effects to deliver a consistent experience across screen sizes.

## 💻 Getting Started

To run ShinyDex 2.0 locally, you'll need Node.js and npm installed.

**1. Clone the repository**

```bash
git clone https://github.com/Cryologix22/shiny-dex-w-react.git
```

**2. Navigate to the project directory**

```bash
cd shiny-dex-w-react
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

Open `http://localhost:3000` in your browser.

An internet connection is required to retrieve Pokémon data from the PokéAPI.

### Production Build

```bash
npm run build
```

This generates an optimized production build in the `build` directory.

## 📚 What I Learned

Building ShinyDex 2.0 helped me strengthen my understanding of:

- Designing and organizing reusable React components.
- Passing data through props and managing component state.
- Fetching and rendering data from an external API.
- Working with asynchronous JavaScript and promises.
- Using React Router to create dynamic application pages.
- Managing loading states and handling API errors.
- Building responsive interfaces with CSS Grid and Flexbox.
- Debugging application behavior across development and production environments.
- Deploying and maintaining a React application with GitHub and Vercel.

More importantly, this project demonstrated how much more manageable a growing application becomes when its components, data, and responsibilities are thoughtfully organized.

## 🌱 Project Evolution

**ShinyDex Classic** — A vanilla HTML, CSS, and JavaScript Pokédex focused on the original 151 Kanto Pokémon.

**ShinyDex 2.0** — A React-powered rebuild featuring nine generations, reusable components, dynamic routes, expanded API integration, and a redesigned interface.

The second version represents both an expansion of the original idea and a milestone in my progression as a front-end developer.

## ❤️ For My Family

This project is part of a much bigger journey.

I'm pursuing front-end development to build a career that allows me to create meaningful work while spending more time with the people who matter most.

Every new concept, every debugging session, and every completed project brings me another step closer to that goal.

**Built with curiosity, persistence, and a whole lot of late nights.**

## 👨‍💻 Developer

**Cryologix22**

Front-End Development Student | React • JavaScript • HTML • CSS

- [GitHub](https://github.com/Cryologix22)
- [Portfolio](https://cryologix22.github.io/E-Portfolio/)
- [Live ShinyDex 2.0](https://shiny-dex-w-react.vercel.app/)

---

### Credits & Disclaimer

ShinyDex 2.0 is an independent, noncommercial educational and portfolio project. It is not affiliated with or endorsed by Nintendo, Game Freak, Creatures Inc., or The Pokémon Company.

Pokémon names, characters, artwork, and related trademarks belong to their respective rights holders.

**Regional map imagery:** Sourced from [Bulbapedia](https://bulbapedia.bulbagarden.net/) and the [Bulbagarden Archives](https://archives.bulbagarden.net/). Credit is given to Bulbapedia, Bulbagarden, and the original creators and rights holders of the imagery.

**Pokémon data, sprites, and cries:** Provided through [PokéAPI](https://pokeapi.co/).

All third-party materials remain subject to their respective copyright and licensing terms.
