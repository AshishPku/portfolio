import { useEffect } from "react";
import "./mainblock.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import { MdWavingHand } from "react-icons/md";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
import avatar from "./../../images/avatar.png";
import AOS from "aos";
import "aos/dist/aos.css";

function MainBlock() {
  const GithubAnimation = useWebAnimations({
    keyframes: [
      { boxShadow: "0 0 10px yellow" },
      { boxShadow: "0 0 10px #0f93ff" },
      { boxShadow: "0 0 10px #02cf24" },
      { boxShadow: "0 0 10px pink" },
      { boxShadow: "0 0 10px yellow" },
    ],
    animationOptions: {
      duration: 4000,
      iterations: 1, // Play once and restart manually
      fill: "forwards",
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (GithubAnimation?.animation) {
      GithubAnimation.animation.onfinish = () => {
        GithubAnimation.animation.currentTime = 0;
        GithubAnimation.animation.play();
      };
    }
  }, [GithubAnimation]);

  return (
    <div>
      <div
        className="socialLinks"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="2500"
        data-aos-duration="700"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top"
      >
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100013804970399"
            rel="noreferrer"
            target="_blank"
            aria-label="Facebook"
          >
            <GrFacebookOption className="fbIcon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/ashish_xku/"
            rel="noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <RiInstagramFill className="instaIcon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ashish-kumar-mnit2022/"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <GrLinkedinOption className="linkIcon" />
          </a>
        </div>
      </div>
      <div className="mainBlock">
        <div
          className="IntroDiv"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <h1 className="Helloh1">
            <MdWavingHand className="wavingIcon" /> Hello, I am
          </h1>
          <p className="namePara">Ashish </p>
          <div className="expDiv">
            <p className="expPara">Full Stack Developer</p>
          </div>
          <a
            href="https://github.com/AshishPku"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <div
              className="githubDiv"
              ref={GithubAnimation.ref}
              data-aos="flip-left"
              data-aos-offset="0"
              data-aos-delay="2000"
              data-aos-duration="1000"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              Github Account
              <VscGithubInverted size={35} className="githubIcon" />
            </div>
          </a>
        </div>
        <div className="avatarDiv">
          <img src={avatar} width="300px" alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
