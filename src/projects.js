import AdminDashboard from "./images/AdminDashboard.png";
import CasaSerena from "./images/CasaSerena.png";
import LibraryProject from "./images/Library.png";
import TicTacToe from "./images/TicTacToe.png";
import TodoList from "./images/ToDo.png";
import WeatherApp from "./images/WeatherApp.png";
import Battleship from "./images/Battleship.png";
import CVApplication from "./images/CVApplication.png";

const projectsList = [
    {
        title: "Battleship Game",
        description:
            "A classic Battleship game built with vanilla JavaScript, HTML, and CSS. Features include a responsive design, turn-based gameplay, and an AI opponent.",
        technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
        linkPage: "https://yaoming16.github.io/TOP-Battleship/",
        linkRepo: "https://github.com/yaoming16/TOP-Battleship",
        image: Battleship,
    },
    {
        title: "CV Application",
        description: "A modern, accessible CV builder application built with React and Vite. Create, customize, and preview your professional CV with an intuitive interface.",
        technologies: ["React", "Vite", "CSS"],
        linkPage: "https://top-cv-application-919.pages.dev/",
        linkRepo: "https://github.com/yaoming16/TOP-CV-Application",
        image: CVApplication,
    },
    {
        title: "Todo List",
        description:
            "A simple, responsive Todo List app built for The Odin Project. It uses Webpack, vanilla JS, and modular components. Create projects, add tasks, and manage them with a clean UI.",
        technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
        linkPage: "https://yaoming16.github.io/TOP-Todo-List/",
        linkRepo: "https://github.com/yaoming16/TOP-Todo-List",
        image: TodoList,
    },
    {
        title: "Restaurant Page - Casa Serena",
        description:
            "Casa Serena is an elegant Spanish fine dining restaurant website that blends traditional Spanish culinary heritage with contemporary global influences. Located in the heart of Barcelona, this project demonstrates modern web development techniques.",
        technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
        linkPage: "https://yaoming16.github.io/Top-Restaurant-Page/",
        linkRepo: "https://github.com/yaoming16/Top-Restaurant-Page",
        image: CasaSerena,
    },
    {
        title: "Tic Tac Toe",
        description:
            "A clean, minimalist implementation of the classic Tic Tac Toe game",
        technologies: ["HTML", "CSS", "JavaScript"],
        linkPage: "https://yaoming16.github.io/TOP-Tic-Tac-Toe-Project/",
        linkRepo: "https://github.com/yaoming16/TOP-Tic-Tac-Toe-Project",
        image: TicTacToe,
    },
    {
        title: "Library Project",
        description:
            "A personal library management application that allows users to add, remove, and track books in their collection.",
        technologies: ["HTML", "CSS", "JavaScript"],
        linkPage: "https://yaoming16.github.io/TOP-Library-Project/",
        linkRepo: "https://github.com/yaoming16/TOP-Library-Project",
        image: LibraryProject,
    },
    {
        title: "Admin Dashboard",
        description:
            "Simple admin dashboard with a sticky sidebar, top section, and responsive card grid layout.",
        technologies: ["HTML", "CSS"],
        linkPage: "https://yaoming16.github.io/TOP-Admin-Dashboard/",
        linkRepo: "https://github.com/yaoming16/TOP-Admin-Dashboard",
        image: AdminDashboard,
    },
    {
        title: "Weather App",
        description:
            "Simple weather lookup built with Webpack. Enter a city, the app fetches its coordinates via the Open-Meteo geocoding API and displays current conditions plus a 7-day forecast from the Open-Meteo forecast API.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        linkPage: "https://yaoming16.github.io/TOP-weather-page/",
        linkRepo: "https://github.com/yaoming16/TOP-weather-page",
        image: WeatherApp,
    }
];

export default projectsList;
