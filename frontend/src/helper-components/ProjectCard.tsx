// Custom Components
import SocialButton from "./SocialButton";

// Styling
import "../css/ProjectCard.css";

function ProjectCard({
  testSocial,
  testLink,
}: {
  testSocial: string;
  testLink: string;
}) {
  return (
    <div className="project-card">
      <h1>Project 1</h1>
      <div className="project-card-grid">
        <div className="project-card-info">
          <p>Information about Project 1</p>
          <SocialButton social={testSocial} socialLink={testLink} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
