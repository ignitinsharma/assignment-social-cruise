import React from "react";
import "../CSS/Skills.css";
import Html from "../Images/SkillImages/Html.png";
import Css from "../Images/SkillImages/Css.png";
import JavaScript from "../Images/SkillImages/JavaScript.png";
import Git from "../Images/SkillImages/git.png";
import Github from "../Images/SkillImages/Github.png";
import ReactPng from "../Images/SkillImages/react.png";
import Redux from "../Images/SkillImages/redux.png";
import ChakraUi from "../Images/SkillImages/ChakraUi.png";
import Mongodb from "../Images/SkillImages/mongodb.png";
import Nodejs from "../Images/SkillImages/nodejs.png";
import Postman from "../Images/SkillImages/postman.png";
import Express from "../Images/SkillImages/Express.png";
import Nextjs from "../Images/SkillImages/nextjs.png";
import Mongoose from "../Images/SkillImages/mongoose.png";
import tailwind from "../Images/SkillImages/tailwind.png";

const Skills = () => {
  const Allskills = [
    {
      img: Html,
      title: "HTML",
    },
    {
      img: Css,
      title: "CSS",
    },
    {
      img: JavaScript,
      title: "Javascript",
    },
    {
      img: ReactPng,
      title: "ReactJS",
    },
    {
      img: Nextjs,
      title: "NextJS",
    },
    {
      img: Redux,
      title: "Redux",
    },
    {
      img: tailwind,
      title: "TailwindCSS",
    },
    {
      img: ChakraUi,
      title: "Chakra-Ui",
    },
    {
      img: Git,
      title: "Git",
    },
    {
      img: Github,
      title: "Github",
    },
    {
      img: Postman,
      title: "Postman",
    },
    {
      img: Mongodb,
      title: "MongoDB",
    },
    {
      img: Nodejs,
      title: "NodeJS",
    },
    {
      img: Express,
      title: "ExpressJS",
    },
    {
      img: Mongoose,
      title: "Mongoose",
    },
  ];

  return (
    <div id="skills" className="SkillContainerMain">
      <h1 className="Skill_H1">Skills</h1>
      <div className="skillsContainerSecond">
        {Allskills.map((ele, index) => (
          <div key={index}>
            <img src={ele.img} alt={ele.title} width="70px" height="70px" />
            <p>{ele.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
