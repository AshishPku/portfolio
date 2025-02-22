import { useEffect } from "react";
import "./about.css";
import MyPic from "../../images/mypic.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about" id="about">
      <div className="aboutSecond">
        <div className="aboutHeadDiv">
          <h1
            className="aboutHead"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            About Me
          </h1>
          <div className="aboutHeadUnderlineMianDiv">
            <div
              className="aboutHeadUnderline"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="aboutHeadUnderlineCircle"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="aboutHeadUnderline2"
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
        <div className="aboutBlock">
          <div
            className="myPicMainDiv"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <div className="myPicDiv">
              <div className="myPicExtraDiv"></div>
              <img src={MyPic} alt="" />
            </div>
          </div>
          <div
            className="aboutTextDiv"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <FaQuoteLeft className="invertedCommas" />
            <p className="aboutText">
              A software developer with expertise in C++, MERN stack, and cloud
              computing. I have experience building efficient end-to-end
              solutions and a strong proficiency in leveraging modern
              technologies.{" "}
            </p>
            <FaQuoteRight className="invertedCommas" />
          </div>
        </div>
        <div
          className="personalInfo"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <div className="qualificationDiv">
            <h1>Education :</h1>
            <div className="qualificationExtraDiv"></div>

            <ul>
              <li className="matriculation">
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  Nov 2022 - June 2026
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "800",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  BTech in ECE + CSE.
                </p>
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  Malaviya National Institute of Technology,Jaipur
                  <br />
                  Rajasthan.
                </p>
              </li>
              <li className="matriculation" style={{ marginTop: "20px" }}>
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  2020 - 2022
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "800",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  Intermediate Science
                </p>
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  Inter Science College, Hazaribag.
                </p>
              </li>
              <li className="matriculation" style={{ marginTop: "20px" }}>
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  till 2020
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "800",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  Matric
                </p>
                <p style={{ padding: 0, margin: 0, lineHeight: "20px" }}>
                  Leela Janki Public School,Bokaro <br />
                  Jharkhand.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
