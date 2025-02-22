import { useEffect } from "react";
import "./work.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChatApp from "../../images/chat_app.png";
import Fabmovie from "../../images/fabmovie.png";
import quiz_web from "../../images/quiz_web.png";
import { FaGlobe } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
function Work() {
  useEffect(() => {
    AOS.init();
  }, []);
  const cards = [
    {
      image: Fabmovie,
      site: "https://react-project-ordmr3m36-ashishpkus-projects.vercel.app/",
      github: "https://github.com/AshishPku/Fabmovie",
      heading: "fabMOVIE",
    },
    {
      image: quiz_web,
      site: "https://akpquiz.netlify.app/",
      github: "https://github.com/AshishPku/Quiz_app",
      heading: "Quiz APP",
    },
    {
      image: ChatApp,
      site: "https://chatweb-smst.onrender.com/",
      github: "https://github.com/AshishPku/ChatWEB/tree/gitinit_ashish",
      heading: "Chat Web",
    },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="workMainDiv" id="work">
      <div className="workSecondDiv">
        <div className="workHeadDiv">
          <h1
            className="workHead"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            Work
          </h1>
          <div className="workHeadUnderlineMianDiv">
            <div
              className="workHeadUnderline"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="workHeadUnderlineCircle"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="workHeadUnderline2"
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
        <div className="workBlock">
          <Box>
            <Grid container spacing={5}>
              {cards.map((val, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    sm={12}
                    className="mainGrid"
                    key={index}
                  >
                    <Item
                      className="workItems"
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top"
                    >
                      <img src={val.image} alt="" className="workImages" />
                      <div className="workItemsExtraDiv"></div>
                      <div className="cardHeading">{val.heading}</div>
                      <div className="visitingDiv">
                        <a
                          href={val.site}
                          style={{ textDecoration: "none" }}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button>
                            Visit Site <FaGlobe className="websiteIcon" />
                          </button>
                        </a>
                        <br />
                        <a
                          href={val.github}
                          style={{ textDecoration: "none" }}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button>
                            View On Github <VscGithub className="websiteIcon" />
                          </button>
                        </a>
                      </div>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Work;
