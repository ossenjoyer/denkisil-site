import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Projects";

import "../styles/MainPage.css";

export default function ProjectsPage () {
    return (
        <div className="AppMainPageContent">
            <div className="AppMainPageCenterContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>My Projects</h1>
                    <p>Here you can find all my projects that I have done in my career</p>
                </div>
            </div>
            <div className="AppMainPageCenterContentBox">
                {
                    projects.map((project, index) => 
                        <ProjectCard 
                            projectId={index}
                            projectPreview={require("../images/" + project.preview)}
                            projectTitle={project.name}
                            projectShortDescription={project.shortDescription}
                        />
                    )     
                }
            </div>
        </div>
    )
}