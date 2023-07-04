import { useTranslation } from "react-i18next";

import telegramIcon from "../icons/telegram.svg";
import githubIcon from "../icons/github.svg";

import "../styles/MainPage.css";

export default function MainPage() {
  const { i18n } = useTranslation();

  return (
    <div className="AppMainPageContent">
      <div className="AppMainPageBanner">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("MainPage.WelcomeBanner.Title")}</h1>

          <p>{i18n.t("MainPage.WelcomeBanner.Introduction")}</p>
        </div>
      </div>

      <div className="AppMainPageRightContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("MainPage.AboutMeBanner.Title")}</h1>

          <ul>
            <li>{i18n.t("MainPage.AboutMeBanner.List.0")}e</li>
            <li>{i18n.t("MainPage.AboutMeBanner.List.1")}</li>
            <li>{i18n.t("MainPage.AboutMeBanner.List.2")}</li>
            <li>{i18n.t("MainPage.AboutMeBanner.List.3")}</li>
          </ul>
        </div>
      </div>

      <div className="AppMainPageLeftContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("MainPage.MyContactsBanner.Title")}</h1>
          <ul className="AppMainPageContactsList">
            <li>
              <img alt="Telegram" src={telegramIcon} />
              <a href="https://t.me/denkisil">@denkisil</a>
            </li>
            <li>
              <img alt="GitHub" src={githubIcon} />
              <a href="https://github.com/denkisil">denkisil</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
