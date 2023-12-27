import React from "react";
import photo from "../images/og-Number-Plate-Detection.png";
import certificate from "../images/certificate.jpg";
import net from "../images/net.avif";
import shop from "../images/shop.avif";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const Work = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center h1 mt-5 line">Work</div>
        <div className="h3">EXPIRENCE</div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <div className="p line">
              <span className="text-primary h3 ">Ai4see,</span> Bangalore —
              Website Development Intern
              <ul>
                <li>
                  Design of the overall architecture of the webapplication
                </li>
                <li>Build reusable code and libraries for future use.</li>
                <li>
                  Work on the optimization of the application for maximum speed
                  and scalability
                </li>
                <li>
                  {" "}
                  Work on the implementation of security and data protection
                </li>
                <li>
                  Work on the integration of the front-end and back-end aspects
                  of the web application
                </li>
              </ul>
            </div>
            <div className="h4 mt-4">
              Links:
              <span className="mx-5 text-dark ">
                <a href="https://sample-e2dba.web.app/" className="io">
                  {" "}
                  <FontAwesomeIcon icon={faLink} className="fa-1x" />{" "}
                </a>
              </span>
              <span className="mx-3 io">
                <a href="https://github.com/Dharmareddy8520" className="io">
                  <FontAwesomeIcon icon={faGit} className="fa-1x" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mx-5">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "circIn", duration: "5" }}
                src="https://images.unsplash.com/photo-1690393637175-a75f13ff6798?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={350}
                width={300}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h3 my-5 text-center">Checkout a few of my works</div>
        <div className="row">
          <div className="col-md-6">
            <motion.img
              src={photo}
              alt="number plate detection "
              style={{ width: "100%", height: "auto" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "circIn", duration: "5" }}
            />
          </div>
          <div className="col-md-6 line">
            <div>
              <span className="text-danger h4">Title :</span> RealTime number
              Plate Detection
            </div>
            <div className="mt-3">
              <span className="text-success h4 ">Description:</span>
              The goal of this project is to develop a system for recognizing
              vehicle number plates using existing surveillance cameras. The
              system will capture images of vehicles and use image segmentation
              to extract the number plate region and store and display data in
              website.
            </div>
            <div className="mt-3">
              <span className="text-warning h4">Technology</span>{" "}
              :webtechnologies/Machine learning
            </div>
            <div>
              <div className="h4 mt-5">
                Links :{" "}
                <span>
                  <a
                    href="https://github.com/Dharmareddy8520/ANPR"
                    className="mx-3"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faGit} className="fa-1x" />{" "}
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Owf1Tajbj7k&ab_channel=ramreddy"
                    className="mx-3"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="fa-1x" />{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="my-3">
              <span className="text-danger h4 "> Title:</span> DIGITALIZED
              CERTIFICATE GENERATION SYSTEM
            </div>
            <div className="my-3">
              <span className="text-success h4">Description :</span> It is a
              web-based application that has the capability to automatically
              generate certificates in bulk. The primary objective of this
              project is to streamline the process of certificate generation,
              making it more efficient and timesaving.
            </div>
            <div className="my-3">
              <span className="text-secondary h4">Base paper: </span>
              <a
                href="              https://ijsrem.com/download/digitalized-certificate-generation-system/
"
              >
                <FontAwesomeIcon icon={faLink} />{" "}
              </a>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src={certificate}
              alt="certificate"
              style={{ width: "100%", height: "auto" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "circIn", duration: "5" }}
            />
          </div>
        </div>
        <div>
          <div className="row my-5">
            <div className="col-md-6">
              <motion.img
                src={shop}
                alt=""
                style={{ width: "100%", height: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "circIn", duration: "5" }}
              />
            </div>
            <div className="col-md-6">
              <div className="h5">
                <span className="text-primary h4">Title:</span> Dshop
              </div>
              <div className="my-3">
                <span className="text-success h4">Description:</span>
                The goal of this project is to develop a website for shopping
                using MERN stack. With the help of fake store api and firestore
                database i developed this website.for frontend i used reactjs
                and for backend i used nodejs and expressjs and for database i
                used firestore.
              </div>
              <div className="">
                <span className="text-danger h4">Technology: </span>
                Reactjs,Html,css,bootstrap,Nodejs,Firebase,Mongodb{" "}
              </div>
              <div className=" mt-5">
                <div className="h4 text-secondary">
                  Links :{" "}
                  <a href="https://frontend-nine-black-86.vercel.app/">
                    <span className="mx-5">
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                  </a>
                  <a href="https://github.com/Dharmareddy8520/frontend">
                    {" "}
                    <span className="mx-5">
                      <FontAwesomeIcon icon={faGit} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row my-5">
            <div className="col-md-6">
              <div className="mt-5 h4">
                {" "}
                <span className="text-primary">Title :</span> Dflex{" "}
              </div>
              <div className="my-3">
                <span className="text-danger h4"> Description:</span>
                creating a netflix clone using MERN stack .It includes various
                technologies such as reactjs,html,bootstrap,css and javascript
                for frontend.In case of backend i use tmdb api link and
                firestore as database
              </div>
              <div className="">
                <span className="text-danger h4">Technology: </span>
                Reactjs,Html,css,bootstrap,Nodejs,Firebase,Mongodb{" "}
              </div>
              <div className=" mt-5">
                <div className="h4 text-secondary">
                  Links :{" "}
                  <a href="https://dflix-52956.web.app/">
                    <span className="mx-5">
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                  </a>
                  {/* <span className="mx-5">
                    <FontAwesomeIcon icon={faGit} />
                  </span> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <motion.img
                src={net}
                alt=""
                style={{ width: "100%", height: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "circIn", duration: "5" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
