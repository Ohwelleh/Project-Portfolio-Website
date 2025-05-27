// Libraries.

// Custom Components
import ProjectCard from "../helper-components/ProjectCard";

// Styling.
import "../css/Projects.css";

function Projects() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectCard
          testSocial="Google"
          testLink="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjxh7Hq0sSNAxVoFzQIHdsSINQQPAgI"
        />
        <ProjectCard testSocial="Fake" testLink="" />
      </div>
    </div>
  );
}

export default Projects;
