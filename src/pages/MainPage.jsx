import telegramIcon from "../icons/telegram.svg";
import githubIcon from "../icons/github.svg";
import "../styles/MainPage.css";

export default function MainPage () {

    return (
        <div className="AppMainPageContent">
            <div className="AppMainPageBanner">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        Welcome to my website
                    </h1>

                    <p>
                        I'm DenKisil - TypeScript backend developer.
                    </p>
                </div>
            </div>

            <div className="AppMainPageRightContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        Some facts about me
                    </h1>
                    
                    <ul>
                        <li>Born in Ukraine</li>
                        <li>I started programming when I was 13</li>
                        <li>I hate JavaScript, even though I write in it</li>
                        <li>I love listening to electronic music</li>
                    </ul>
                </div>
            </div>

            <div className="AppMainPageLeftContentBox">
                <div className="AppMainPageAlignHelper">
                    <h1>
                        Here my contacts
                    </h1>
                    <ul className="AppMainPageContactsList">
                        <li>
                            <img
                                alt="Telegram"
                                src={telegramIcon}
                            /> 
                            <a href="https://t.me/denkisil">@denkisil</a>
                        </li>
                        <li>
                            <img 
                                alt="GitHub"
                                src={githubIcon}
                            />
                            <a href="https://github.com/denkisil">denkisil</a>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}