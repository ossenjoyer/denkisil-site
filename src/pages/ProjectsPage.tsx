import React from "react";
import "@styles/MainPage.css";
import Menu from "components/Menu";
import ProjectsBoard from "components/ProjectsBoard";

const projects = [
  {
    name: "abcd",
    shortDescription: "alsjcnskdjsldkm",
    imgSrc: "none"
  },
  {
    name: "abcd",
    shortDescription: "alsjcnskdjsldkm",
    imgSrc: "none"
  },
  {
    name: "abcd",
    shortDescription: "alsjcnskdjsldkm",
    imgSrc: "none"
  },
  {
    name: "abcd",
    shortDescription: "alsjcnskdjsldkm",
    imgSrc: "none"
  },
  {
    name: "abcd",
    shortDescription: "alsjcnskdjsldkm",
    imgSrc: "none"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <div className="AppContentBox">
        <h1>Welcome to my website</h1>
        <p>Here you can find some information about my projects</p>
      </div>
      <ProjectsBoard projects={projects} />
    </>
  );
}
