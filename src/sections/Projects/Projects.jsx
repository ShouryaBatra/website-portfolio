import React from "react";
import styles from "./ProjectsStyles.module.css";
import reactEssentialsImg from "../../assets/react-core-concepts-logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Some Random Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          image={reactEssentialsImg}
          link="https://shouryabatra.github.io/fireworks/"
          h3="Fireworks Animation"
          description="Animation I made using Javascript"
        />
        <ProjectCard
          image={reactEssentialsImg}
          link="https://shouryabatra.github.io/React-Essentials/"
          h3="React Essentials"
          description="Web App I made while learning React"
        />
        <ProjectCard
          image={reactEssentialsImg}
          link="https://shouryabatra.github.io/infinite-arrow-animation/"
          h3="Arrow animation"
          description="Simple animation I made using CSS"
        />
      </div>
    </section>
  );
}

export default Projects;
