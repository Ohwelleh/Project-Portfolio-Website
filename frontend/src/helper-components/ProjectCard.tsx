// Custom Components
import SocialButton from "./SocialButton";

// Custom Type.
import type { Project } from "../custom types/Project";

// Styling
import "../css/ProjectCard.css";

function ProjectCard({ project }: { project: Project }) {
  // TODO: Longer name push the information and button past container. Figure out how to adjust the name text.
  // TODO: Adjust the sizing based off the biggest project. Since the project info is static.
  return (
    <div key={project.id} className="project-card">
      <h1>{project.name}</h1>
      <div className="project-card-grid">
        <div className="project-card-info">
          <p>{project.description}</p>
          <p>
            <b>Technologies: </b>
            {project.tech}
          </p>
          <p>sdad</p>
          <SocialButton social={project.socials[0]} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
