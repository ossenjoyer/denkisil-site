import { Link } from "react-router-dom";
import "../styles/MainPage.css";

export default function NotFoundPage () {
    return (
        <div className="AppMainPageContent">
            <div className="AppMainPageLeftContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        Page not found
                    </h1>
                    <p>
                        You can visit <Link to={`/`}>main</Link> page
                    </p>
                </div>
            </div>
        </div>
    )
}