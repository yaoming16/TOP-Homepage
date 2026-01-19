import icons from "./icons/icons.html";
import "./styles.css";
import projectsList from "./projects.js";
import createProjectCard from "./projects/project.js";
import moreProjects from "./moreProjects.js";

const introContainer = document.querySelectorAll(".intro-container");

introContainer.forEach((container) => {
    container.insertAdjacentHTML("beforeend", icons);
});

const projectsContainer = document.getElementById("projects-container");

projectsList.forEach((project) => {
    const projectCard = createProjectCard(
        project.title,
        project.description,
        project.technologies,
        project.linkRepo,
        project.linkPage,
        project.image
    );
    projectsContainer.appendChild(projectCard);
});

const moreProjectsContainer = document.getElementById("more-projects-container");

moreProjects.forEach((project) => {
    const projectCard = createProjectCard(
        project.title,
        project.description,
        project.technologies,
        project.linkRepo,
    );
    moreProjectsContainer.appendChild(projectCard);
});
