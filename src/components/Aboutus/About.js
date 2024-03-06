import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import MySkill from "./MySkill";
import EandE from "./EandE";
import Data from "../Projects/Data";
import CartificateData from "../Cartificats/Data";
import "./About.css";
import resume from "../../image/AsitSinghnewresume.pdf";
import BounceLoader from "react-spinners/BounceLoader";

const About = () => {
  const [loading, setLoading] = useState(false);
  const getYear = new Date().getFullYear();
  const age = getYear - 1997;
  const dateFrom = new Date(2021,1,1);
  const dateTo = new Date();
  const experience = (dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear())))
  const expYear = Math.floor(experience / 12);
  const expMonths = experience % 12;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="Aboutus py-md-5 py-3">
      <Heading bgHeading="RESUME" TitleHeading="about" TitleHeadingSpan="me" />
      {loading ? (
        <div className="preloader">
          <BounceLoader color={"#ffb912"} loading={loading} size={100} />
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 PERSONAL_INFOS">
                <h1>PERSONAL INFOS</h1>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <span>First Name :</span>
                        <span>Asit</span>
                      </li>
                      <li>
                        <span>Last Name :</span>
                        <span>Singh</span>
                      </li>
                      <li>
                        <span>Address :</span>
                        <span>294/4 Juhi Lal Colony, Kanpur</span>
                      </li>
                      <li>
                        <span>Nationality :</span>
                        <span>India</span>
                      </li>
                      <li>
                        <span>Email :</span>
                        <span>
                          <a href="mailto:asitsingh0@gmail.com" target="_blank" rel="noreferrer">
                            asitsingh0@gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        <span>Age :</span>
                        <span>{age}</span>
                      </li>
                      <li>
                        <span>Phone :</span>
                        <span>
                          <a href="tel:+916394066616" target="_blank" rel="noreferrer">
                            +91-6394066616
                          </a>
                        </span>
                      </li>

                      <li>
                        <span>Langages :</span>
                        <span>English, Hindi</span>
                      </li>
                      <li>
                        <span>Instagram :</span>
                        <span>Asitsingh18</span>
                      </li>
                      <li>
                        <span>Freelance :</span>
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={resume} download className="PERSONAL_INFOS_a mb-3">
                  Download CV
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
              <div className="col-lg-6 col-12">
                <div className="box pt-md-2">
                  <div className="child">
                    <h1>
                      <span>
                        {Data.length}
                        <sup>+</sup>
                      </span>{" "}
                      Top
                    </h1>
                    <p>Projects</p>
                  </div>
                  <div className="child">
                    <h1>
                      <span>
                        {expYear}.{expMonths}<sup>+</sup> {/* {experience} */}
                      </span>{" "}
                      Years
                    </h1>
                    <p>experience</p>
                  </div>
                </div>
                <div className="box">
                  <div className="child">
                    <h1>
                      <span>
                        3<sup>+</sup>
                      </span>{" "}
                      BEST
                    </h1>
                    <p>Internships</p>
                  </div>
                  <div className="child">
                    <h1>
                      <span>
                        {CartificateData.length}
                        <sup>+</sup>
                      </span>{" "}
                      TOP
                    </h1>
                    <p>CERTIFICATE'S</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-md-5 py-3">
            <div className="State_line"></div>
          </div>

          <MySkill />

          <div className="py-md-5 py-3">
            <div className="State_line"></div>
          </div>

          <EandE />
        </div>
      )}
      ;
    </div>
  );
};

export default About;
