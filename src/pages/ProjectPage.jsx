import { Link, useParams } from "react-router-dom";
import { projects } from "../data/Projects";

import "../styles/MainPage.css";

export default function ProjectPage ({ match }) {
    const { projectId } = useParams();

    const project = projects[projectId];

    if (project) {
        return (
            <div className="AppMainPageContent">
                <div className="AppMainPageLeftContentBox">
                    <div className="AppMainPageAlignHelperAll">
                        <img 
                            alt="Project preview"
                            src={require("../images/" + project.preview)}
                            height={`60%`}
                            width={`60%`}
                        />
                        <h1>
                            {project.name}
                        </h1>
                        <p>
                            <Link to={project.link}>
                                Visit website
                            </Link>
                        </p>
                        <p>
                            {project.longDescription}
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="AppMainPageContent">
                <div className="AppMainPageLeftContentBox">
                    <div className="AppMainPageAlignHelperAll">
                        <h1>
                            Sorry, cant find project
                        </h1>
                        <p>
                            You can visit <Link to="/projects">projects</Link> page to find the project you need
                        </p>
                        <p>
                            Or you can return to the <Link to="/">main</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}