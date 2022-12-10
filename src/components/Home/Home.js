import React from "react";
import "./Home.css";
import Typeical from "react-typical";

function Home() {

  return (
    <div>
      <section className="Home_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Home_page_img_div">
              <div className="Home_page_img"></div>
            </div>
            <div className="col-lg-6">
              <div className="Home_page_Content">
                <div>
                  <span className="Dash"></span>
                  <h2>I'M ASIT SINGH.</h2>
                  <div className="Post">
                    WEB <span className="Post_Name_for_mobile">developer</span>{" "}
                    <Typeical
                      loop={Infinity}
                      wrapper="b"
                      steps={["designer", 1000, "developer", 1000]}
                      delay={20000}
                      className="Post_Name"
                    />
                  </div>
                </div>
                <p>
                  I'm ASIT SINGH web designer & front‑end developer focused on
                  crafting clean & user‑friendly experiences, I am passionate
                  about building excellent app that improves the lives of those
                  around me.
                </p>
                <button>
                  MORE ABOUT ME
                  <span>
                    <i
                      className="fa fa-arrow-right icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
