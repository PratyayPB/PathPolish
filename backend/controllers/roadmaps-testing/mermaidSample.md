    ```mermaid

graph TD
subgraph Month 1: Core Web Fundamentals
A[HTML Basics & Semantics] --> B[CSS Fundamentals (Selectors, Box Model)]
B --> C[CSS Layout (Flexbox & Grid, Responsive Intro)]
A & C --> D{Project: Static Portfolio/Landing Page}
E[JavaScript Basics (Variables, Data Types, Control Flow)] --> F[JavaScript Functions & DOM Manipulation]
F --> G[Git & GitHub Fundamentals]
G --> D & I
end

    subgraph Month 2: Advanced JavaScript & Logic
        H[ES6+ Features (Arrow Funcs, Destructuring, Async/Await)]
        F --> H
        H --> I{Project: Interactive Mini-Game (To-Do List/Calculator)}
    end

    subgraph Month 3: Modern Frameworks & Tools (React Focus)
        J[Node.js & NPM/Yarn Basics] --> K[React Fundamentals (Components, JSX, Props, State)]
        K --> L[React Hooks, Component Lifecycle & Router]
        L --> M{Project: Multi-page SPA with React Router}
    end

    subgraph Month 4: Data Integration & State Management
        L --> N[Fetching Data (Fetch API, Axios)]
        N --> O[Working with RESTful APIs]
        O --> P[State Management (React Context API / Redux/Zustand Intro)]
        P --> Q{Project: Data-driven App (Movie Database/Weather App)}
    end

    subgraph Month 5: Polish, Testing & Optimization
        C --> R[Advanced CSS (SASS/LESS, CSS-in-JS Intro)]
        R --> S[Accessibility & Semantic HTML Best Practices]
        S --> T[Responsive Design Advanced Techniques]
        T --> U[Unit & Integration Testing (Jest, React Testing Library)]
        U --> V[Web Performance Basics (Lazy Loading, Image Optimization)]
        V --> W{Project: Refactor & Test an Existing App for A11y/Perf}
    end

    subgraph Month 6: Deployment & Specialization
        X[TypeScript Fundamentals (Types, Interfaces)]
        L & Q --> X
        X --> Y[Deployment (Netlify, Vercel, GitHub Pages) & CI/CD Intro]
        Y --> Z[Server-Side Rendering (SSR) / Static Site Generation (SSG) Intro (Next.js/Gatsby)]
        Z --> AA{Project: Build & Deploy a Full-Stack MERN/JAMStack App}
    end

    subgraph Long-term Growth & Specialization
        AA --> BB[Advanced UI/UX Principles]
        AA --> CC[Advanced Web Performance Optimization]
        AA --> DD[Security Best Practices for Frontend]
        AA --> EE[Progressive Web Apps (PWAs) & Offline Capabilities]
        AA --> FF[Web Components & Micro-frontends]
        AA --> GG[Backend Integration & Cloud Platforms (Firebase/Supabase)]
        AA --> HH[WebAssembly & WebGL Introduction]
    end -->

```






import mermaid from "mermaid";
// import generateMermaidCode from "./aiGeneratedRoadmap.js";
mermaid.initialize({ startOnLoad: false });

// Function to convert mermaid code to svg diagram using mermaid api
// async function mermaidToSvg(mermaidCode) {
//   if (typeof mermaidCode !== "string") {
//     console.error("Invalid Mermaid input type:", typeof mermaidCode);
//     throw new Error("Mermaid code must be a string");
//   }
//   try {
//     const { svg } = await mermaid.render("graphDiv", mermaidCode);
//     console.log("Generated SVG:", svg);
//     return svg;
//   } catch (error) {
//     console.error("Error converting Mermaid code to SVG:", error);
//     return null;
//   }
// }
// (async () => {
//   const mermaidCode = await generateMermaidCode(
//     "Frontend Developer",
//     "6 months"
//   );
//   if (!mermaidCode) {
//     console.error("Failed to generate Mermaid code.");
//     return;
//   }
//   console.log("Generated Mermaid Code:", mermaidCode);
//   const svg = await mermaidToSvg(mermaidCode);
//   if (svg) {
//     console.log("Generated SVG:", svg);
//   }
// })();

let mermaidCode = `graph TD
    A[Start: Frontend Learning Journey (6 Months)] --> B[Month 1: Web Foundations - HTML & CSS]
    B --> B1[HTML5: Structure, Semantics, Forms, Accessibility Basics]
    B --> B2[CSS3: Selectors, Box Model, Display, Position]
    B --> B3[CSS: Flexbox, CSS Grid, Responsive Design (Media Queries)]
    B1 & B2 & B3 --> P1(Project: Personal Portfolio Website - Static)

    B --> C[Month 2: JavaScript Core & Version Control]
    C --> C1[JavaScript Basics: Variables, Data Types, Operators, Control Flow]
    C --> C2[JavaScript: Functions, Arrays, Objects, DOM Manipulation]
    C --> C3[ES6+: Arrow Functions, Destructuring, Spread/Rest, Modules]
    C --> C4[Git & GitHub: Basic Commands, Branching, Merging, PRs]
    C1 & C2 & C3 & C4 --> P2(Project: Interactive To-Do List / Calculator with Git)

    C --> D[Month 3: Asynchronous JS & Modern Tooling]
    D --> D1[Asynchronous JS: Callbacks, Promises, Async/Await]
    D --> D2[Fetch API / Axios: Data Consumption from REST APIs]
    D --> D3[NPM / Yarn: Package Management]
    D --> D4[Introduction to Build Tools: Webpack / Vite (Concepts)]
    D1 & D2 & D3 & D4 --> P3(Project: Weather App / Movie Search App (API Integration))

    D --> E[Month 4: Frontend Framework - React (or Vue)]
    E --> E1{Choose ONE: React OR Vue.js}
    E1 --> E1a[React Fundamentals: Components, JSX, Props, State, Hooks]
    E1 --> E1b[Vue.js Fundamentals: Components, Directives, Reactivity, Vue CLI]
    E --> E2[Framework Routing: React Router / Vue Router]
    E --> E3[CSS-in-JS (Styled Components) OR Utility-First CSS (Tailwind CSS)]
    E1a & E1b & E2 & E3 --> P4(Project: E-commerce Product Page / Blog with Routing & Styling)

    E --> F[Month 5: State Management & Advanced Framework Concepts]
    F --> F1[State Management: React Context API + Redux Toolkit OR Vuex / Pinia]
    F --> F2[Form Handling & Validation]
    F --> F3[Deployment Basics: Netlify, Vercel, GitHub Pages]
    F1 & F2 & F3 --> P5(Project: Complex CRM Dashboard / Shopping Cart with State Management)

    F --> G[Month 6: Testing, Performance & Further Growth]
    G --> G1[Unit Testing: Jest / React Testing Library OR Vitest / Vue Test Utils]
    G --> G2[Performance Optimization: Lazy Loading, Code Splitting, Image Optimization]
    G --> G3[Accessibility (A11y) Best Practices]
    G --> G4[UI/UX Principles: User Flow, Wireframing (Concepts)]
    G1 & G2 & G3 & G4 --> P6(Project: Refine P5, Add Tests, Optimize Performance, Deploy Final Version)

    G --> H[Future Growth: Specialization & Advanced Topics]
    H --> H1[Server-Side Rendering (SSR) / Static Site Generation (SSG): Next.js / Nuxt.js]
    H --> H2[Progressive Web Apps (PWAs)]
    H --> H3[Backend Integration: Node.js/Express, Firebase]
    H --> H4[Web Components / Micro-Frontends]
    H --> H5[Advanced DevOps & CI/CD]
    H --> H6[Contributing to Open Source]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style P1 fill:#afa,stroke:#333,stroke-width:1px
    style P2 fill:#afa,stroke:#333,stroke-width:1px
    style P3 fill:#afa,stroke:#333,stroke-width:1px
    style P4 fill:#afa,stroke:#333,stroke-width:1px
    style P5 fill:#afa,stroke:#333,stroke-width:1px
    style P6 fill:#afa,stroke:#333,stroke-width:1px
    style H fill:#9cf,stroke:#333,stroke-width:2px`;

const { svg } = await mermaid.render("graphDiv", mermaidCode);
console.log("Generated SVG:", svg);

/*


(async () => {
  const sampleMermaid = await generateMermaidCode(
    "Frontend Developer",
    "6 months"
  );
  console.log("Sample Mermaid Code:\n", sampleMermaid);
  console.log("Type of Sample Mermaid Code:", typeof sampleMermaid);
})();

{

    Output
    Sample Mermaid Code:
 graph TD
    A[Start: Frontend Learning Journey (6 Months)] --> B[Month 1: Web Foundations - HTML & CSS]
    B --> B1[HTML5: Structure, Semantics, Forms, Accessibility Basics]
    B --> B2[CSS3: Selectors, Box Model, Display, Position]
    B --> B3[CSS: Flexbox, CSS Grid, Responsive Design (Media Queries)]
    B1 & B2 & B3 --> P1(Project: Personal Portfolio Website - Static)

    B --> C[Month 2: JavaScript Core & Version Control]
    C --> C1[JavaScript Basics: Variables, Data Types, Operators, Control Flow]
    C --> C2[JavaScript: Functions, Arrays, Objects, DOM Manipulation]
    C --> C3[ES6+: Arrow Functions, Destructuring, Spread/Rest, Modules]
    C --> C4[Git & GitHub: Basic Commands, Branching, Merging, PRs]
    C1 & C2 & C3 & C4 --> P2(Project: Interactive To-Do List / Calculator with Git)

    C --> D[Month 3: Asynchronous JS & Modern Tooling]
    D --> D1[Asynchronous JS: Callbacks, Promises, Async/Await]
    D --> D2[Fetch API / Axios: Data Consumption from REST APIs]
    D --> D3[NPM / Yarn: Package Management]
    D --> D4[Introduction to Build Tools: Webpack / Vite (Concepts)]
    D1 & D2 & D3 & D4 --> P3(Project: Weather App / Movie Search App (API Integration))

    D --> E[Month 4: Frontend Framework - React (or Vue)]
    E --> E1{Choose ONE: React OR Vue.js}
    E1 --> E1a[React Fundamentals: Components, JSX, Props, State, Hooks]
    E1 --> E1b[Vue.js Fundamentals: Components, Directives, Reactivity, Vue CLI]
    E --> E2[Framework Routing: React Router / Vue Router]
    E --> E3[CSS-in-JS (Styled Components) OR Utility-First CSS (Tailwind CSS)]
    E1a & E1b & E2 & E3 --> P4(Project: E-commerce Product Page / Blog with Routing & Styling)

    E --> F[Month 5: State Management & Advanced Framework Concepts]
    F --> F1[State Management: React Context API + Redux Toolkit OR Vuex / Pinia]
    F --> F2[Form Handling & Validation]
    F --> F3[Deployment Basics: Netlify, Vercel, GitHub Pages]
    F1 & F2 & F3 --> P5(Project: Complex CRM Dashboard / Shopping Cart with State Management)

    F --> G[Month 6: Testing, Performance & Further Growth]
    G --> G1[Unit Testing: Jest / React Testing Library OR Vitest / Vue Test Utils]
    G --> G2[Performance Optimization: Lazy Loading, Code Splitting, Image Optimization]
    G --> G3[Accessibility (A11y) Best Practices]
    G --> G4[UI/UX Principles: User Flow, Wireframing (Concepts)]
    G1 & G2 & G3 & G4 --> P6(Project: Refine P5, Add Tests, Optimize Performance, Deploy Final Version)

    G --> H[Future Growth: Specialization & Advanced Topics]
    H --> H1[Server-Side Rendering (SSR) / Static Site Generation (SSG): Next.js / Nuxt.js]
    H --> H2[Progressive Web Apps (PWAs)]
    H --> H3[Backend Integration: Node.js/Express, Firebase]
    H --> H4[Web Components / Micro-Frontends]
    H --> H5[Advanced DevOps & CI/CD]
    H --> H6[Contributing to Open Source]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style P1 fill:#afa,stroke:#333,stroke-width:1px
    style P2 fill:#afa,stroke:#333,stroke-width:1px
    style P3 fill:#afa,stroke:#333,stroke-width:1px
    style P4 fill:#afa,stroke:#333,stroke-width:1px
    style P5 fill:#afa,stroke:#333,stroke-width:1px
    style P6 fill:#afa,stroke:#333,stroke-width:1px
    style H fill:#9cf,stroke:#333,stroke-width:2px
Type of Sample Mermaid Code: string
    */
```
