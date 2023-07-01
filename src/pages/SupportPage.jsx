import { useTranslation } from "react-i18next";
import "../styles/MainPage.css";

export default function SupportPage() {
  const { i18n } = useTranslation();

  const { translation } = i18n.getDataByLanguage(i18n.language);

  const { Goverment, Civilian } =
    translation.SupportPage.UkrainianCharities.Charities;

  const { FeedrumProject } = translation.SupportPage;

  return (
    <div className="AppMainPageContent">
      <div className="AppMainPageCenterContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("SupportPage.WelcomeBanner.Title")}</h1>
          <p>{i18n.t("SupportPage.WelcomeBanner.Introduction")}</p>
        </div>
      </div>
      <div className="AppMainPageCenterContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("SupportPage.UkrainianCharities.Title")}</h1>
          <h3>{i18n.t("SupportPage.UkrainianCharities.Introduction")}</h3>
        </div>
      </div>
      <div className="AppMainPageCenterContentBox">
        <div className="AppMainPageAlignHelper">
          <h3>
            {i18n.t("SupportPage.UkrainianCharities.Charities.Goverment.Title")}
          </h3>
          <ul>
            {Object.values(Goverment.List).map((org) => {
              return (
                <li>
                  <a href={org.Link}>{org.Name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="AppMainPageAlignHelper">
          <h3>
            {i18n.t("SupportPage.UkrainianCharities.Charities.Civilian.Title")}
          </h3>
          <ul>
            {Object.values(Civilian.List).map((org) => {
              return (
                <li>
                  <a href={org.Link}>{org.Name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="AppMainPageCenterContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("SupportPage.FeedrumProject.Title")}</h1>
          <p>{i18n.t("SupportPage.FeedrumProject.Introduction")}</p>
          <ul>
            {Object.values(FeedrumProject.List).map((org) => {
              return (
                <li>
                  <a href={org.Link}>{org.Name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
