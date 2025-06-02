// Libraries.
import { useEffect, useState } from "react";

// Custom Components
import ProjectCard from "../helper-components/ProjectCard";

// Data.
import ProjectData from "../data/ProjectData.json";

// Styling.
import "../css/Projects.css";
import type { Project, SocialInfo } from "../custom types/Project";

function Projects() {
  const [convertedData, setConvertedData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myProjects: Project[] = [];
    ProjectData.data.forEach((proj) => {
      let newSocial: SocialInfo[] = [
        {
          socialName: "",
          socialLink: "",
        },
      ];
      let newProject: Project = {
        id: -1,
        name: "",
        socials: newSocial,
        tech: [],
        description: "",
      };
      newProject.id = proj.id;
      newProject.name = proj.name;
      newProject.socials[0].socialName = proj.social[0].socialName;
      newProject.socials[0].socialLink = proj.social[0].socialLink;
      newProject.tech = proj.tech;
      newProject.description = proj.description;

      myProjects.push(newProject);
    });

    setConvertedData(myProjects);
    setLoading(false);
  }, []);

  return (
    <div className="project-container">
      <h1>Projects</h1>
      {loading ? (
        <div>No projects currently</div>
      ) : (
        <div className="projects">
          {convertedData.map((data) => (
            <ProjectCard project={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
