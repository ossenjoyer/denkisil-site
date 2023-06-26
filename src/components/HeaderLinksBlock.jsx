import { Link } from "react-router-dom";

export default function HeaderLinksBlock () {
    return (
        <div className="AppHeaderLinksBlock">
            <ul className="AppHeaderLinks">
                <Link to={`/resume`} className="AppHeaderLink">
                    CV
                </Link>
                <Link to={`/projects`} className="AppHeaderLink" >Projects</Link>
                <Link to={`/support`} className="AppHeaderLink" >Support</Link>
            </ul>
        </div>
    )
}