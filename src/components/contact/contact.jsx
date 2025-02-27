import { useEffect } from "react";
import "./contact.css";
import { MdEmail, MdArrowForwardIos, MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contact" id="contact">
      <div className="contactSecondDiv">
        <div className="contactHeadDiv">
          <h1
            className="contactHead"
            data-aos="zoom-in"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            Contact Me
          </h1>
          <div className="contactHeadUnderlineMianDiv">
            <div
              className="contactHeadUnderline"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="contactHeadUnderlineCircle"
              data-aos="fade-down"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="contactHeadUnderline2"
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
          </div>
        </div>
        <div className="contactMainBlock">
          <div className="contactIndividualBlock">
            <div
              className="arrowDiv"
              data-aos="zoom-in"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <div className="emailDiv">
                <MdEmail className="emailIcon" />
              </div>
              <MdArrowForwardIos className="arrowIcon" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <a className="myEmail" href="mailto:ashishjionet2550@gmail.com">
                ashishjionet2550@gmail.com
              </a>
            </div>
          </div>
          <div className="contactIndividualBlock">
            <div
              className="arrowDiv"
              data-aos="zoom-in"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <div className="emailDiv">
                <IoMdCall className="emailIcon" />
              </div>
              <MdArrowForwardIos className="arrowIcon" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <p className="myPhone">+91 6202803625</p>
            </div>
          </div>
          <div className="contactIndividualBlock">
            <div
              className="arrowDiv"
              data-aos="zoom-in"
              data-aos-offset="150"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <div className="emailDiv">
                <MdLocationPin className="emailIcon" />
              </div>
              <MdArrowForwardIos className="arrowIcon" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <p className="myAddress">
                Malaviya National Institute of Technology,Jaipur. Rajasthan
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#271E35",
              marginTop: "50px",
            }}
          ></div>
          <div
            className="contactSocialDiv"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100013804970399"
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <FaFacebookF className="contactIcons" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/ashish_xku/"
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <FaInstagram className="contactIcons" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-mnit2022/"
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <FaLinkedinIn className="contactIcons" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
