import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../images/avatar.png";
import profile from "../images/show.jpg";
import { motion } from "framer-motion";
import "./Home.css";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className="px-5 mb-5 loot">
        <div className="row my-5">
          <div className="col-md-6 col-sm-6">
            <div className="h1 ">Hi,</div>
            <div className="h1">
              I'am <span className="text-primary">Dharma Reddy Pandem</span>{" "}
            </div>
            <div className="h1">Web Designer</div>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-lg btn-primary mt-5 btlo"
            >
              contacts
            </motion.div>
            <div className="container my-4">
              <span className="mx-3">
                {" "}
                <a href="https://github.com/Dharmareddy8520" className="loo">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </span>
              <span className="mx-3">
                <a
                  href="https://www.linkedin.com/in/dharmareddy-p-21177824b/"
                  className="loo"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 50 }}
                transition={{ delay: 0.5 }}
                className="mx-3"
              >
                <a
                  href="https://www.instagram.com/dharmareddy0887/"
                  className="loo"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </motion.span>
            </div>
            <div className="kool mb-3">
              <motion.div
                animate={{ x: 20 }}
                transition={{ delay: 1 }}
                className="h4"
              >
                Contact me here!
              </motion.div>
              <div>Email:dharmareddy087@gmail.com</div>
              <div>Phone Number:+91-9603938735</div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ delay: 0.5 }}
              src={profile}
              alt="profile"
              style={{ width: "100%", height: "auto" }}
              whileHover={{
                scale: 0.7,
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
