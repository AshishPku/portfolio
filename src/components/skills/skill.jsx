import { useEffect } from "react";
import "./skill.css";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";
import AOS from "aos";
import PWA from "../../images/pwa.png";
import Sanity from "../../images/sanity.png";
import Postgresql from "../../images/postgresql.png";
import Supabase from "../../images/supabase.png";
import "aos/dist/aos.css";

function Skills() {
  let Skills = [
    { skillName: "HTML", icon: <FaHtml5 className="htmlIcon" /> },
    { skillName: "CSS", icon: <FaCss3Alt className="cssIcon" /> },
    {
      skillName: "Javascript",
      icon: <SiJavascript className="javascriptIcon" />,
    },
    {
      skillName: "TypeScript",
      icon: <SiTypescript className="typescriptIcon" />,
    },
    { skillName: "ReactJS", icon: <FaReact className="reactjsIcon" /> },
    { skillName: "NextJS", icon: <SiNextdotjs className="NextIcon" /> },
    { skillName: "Redux", icon: <SiRedux className="reduxIcon" /> },
    {
      skillName: "Progressive Web App",
      icon: <img src={PWA} className="pwaIcon" alt="pwa_img" />,
    },
    {
      skillName: "Tailwind CSS",
      icon: <SiTailwindcss className="TailwindIcon" />,
    },

    // {
    //   skillName: "React Native",
    //   icon: <FaReact className="reactNativeIcon" />,
    // },
    { skillName: "Github", icon: <FaGithub className="githubIcon" /> },
    {
      skillName: "Sanity",
      icon: <img src={Sanity} className="sanityIcon" alt="Sanity_img" />,
    },
    { skillName: "NodeJS", icon: <FaNodeJs className="nodeIcon" /> },
    { skillName: "ExpressJS", icon: <SiExpress className="ExpressIcon" /> },
    { skillName: "MongoDB", icon: <SiMongodb className="mongoIcon" /> },
    {
      skillName: "PostgreSQL",
      icon: (
        <img src={Postgresql} className="postgresqlIcon" alt="Postgresql_img" />
      ),
    },
    // { skillName: "GraphQL", icon: <SiGraphql className="graphqlIcon" /> },
    // { skillName: "OpenAi", icon: <SiOpenai className="openaiIcon" /> },
    // { skillName: "Firebase", icon: <SiFirebase className="firebaseIcon" /> },
    // {
    //   skillName: "Supabase",
    //   icon: <img src={Supabase} className="supabaseIcon" alt="Supabase_img" />,
    // },
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mainSkill" id="skills">
      <div className="skillSecondDiv">
        <div className="skillHeadDiv">
          <h1
            className="skillHead"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            Skills and Experience
          </h1>
          <div className="skillHeadUnderlineMianDiv">
            <div
              className="skillHeadUnderline"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="skillHeadUnderlineCircle"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="skillHeadUnderline2"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
          </div>
        </div>
        <div className="mySkillsDiv">
          <div
            className="mySkillsFirstDiv"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <div style={{ color: "#e0e0e0", lineHeight: "10px" }}>
              <p style={{ fontSize: "18px", fontWeight: 600 }}>
                Sep 2023 - Present
              </p>
              <p style={{ fontSize: "18px" }}>Freelance</p>
              <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                Full Stack Developer
              </p>
              <p style={{ lineHeight: "initial" }}>
                Developed Full-Stack applications using the latest technologies
              </p>
              <ul style={{ lineHeight: "initial" }}>
                <li>Front-end development with React.js and Next.js.</li>
                <li>
                  Styling expertise with Tailwind CSS, MUI, Chakra UI, Shadcn
                  UI, and Custom CSS.
                </li>
                <li>
                  Back-end development using Node.js, Express.js, and Next.js
                  API routes.
                </li>
                <li>MongoDB and PostgreSQL for Database.</li>
                <li>
                  Utilizing Firebase and Supabase as Backend-as-a-Service.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mySkillsSecondDiv"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            {Skills.map((val, index) => {
              return (
                <div className="my_skills " key={index}>
                  <div className="extra_div_my_skills"></div>
                  <div className="my_skills_second">
                    {val.skillName} {val.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
