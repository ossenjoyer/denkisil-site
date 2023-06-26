import { Link } from "react-router-dom";
import "../styles/MainPage.css";

export default function CVPage () {
   return ( 
        <div className="AppMainPageContent">
            <div className="AppMainPageLeftContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        My CV
                    </h1>
                    <p>
                        In progress...
                    </p>
                </div>
            </div>
            <div className="AppMainPageLeftContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        My Resume
                    </h1>
                    <p>
                        In progress...
                    </p>
                </div>
            </div>
            <div className="AppMainPageLeftContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        My Portfolio
                    </h1>
                    <p>
                        You can see on <Link to={`/projects`}>Projects</Link> page
                    </p>
                </div>
            </div>
        </div>  
    )
}