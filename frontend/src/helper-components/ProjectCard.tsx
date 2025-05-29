// Custom Components
import SocialButton from "./SocialButton";

// Custom Type.
import type { Project } from "../custom types/Project";

// Styling
import "../css/ProjectCard.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div key={project.id} className="project-card">
      <h1>{project.name}</h1>
      <div className="project-card-grid">
        <div className="project-card-info">
          <p>{project.description}</p>
          <SocialButton social={project.socials[0]} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
