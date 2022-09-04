import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import "./Project.css";
import Data from "./Data";
import BounceLoader from "react-spinners/BounceLoader";

const Project = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(Data);
  const filterItem = (catItem) => {
    const updateItem = Data.filter((currentItem) => {
      return currentItem.category === catItem;
    });
    setItem(updateItem);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="PageBackground">
      <Heading
        bgHeading="My Work"
        TitleHeading="my"
        TitleHeadingSpan="Project's"
      />

      {loading ? (
        <div className="preloader">
          <BounceLoader color={"#ffb912"} loading={loading} size={100} />
        </div>
      ) : (
        <div>
          <div className="container pb-3">
            <div className=" menu-tab ">
              <button className="" onClick={() => setItem(Data)}>
                All
              </button>
              <button className="" onClick={() => filterItem("Html")}>
                HTML
              </button>
              <button className="" onClick={() => filterItem("Css")}>
                CSS
              </button>
              <button className="" onClick={() => filterItem("JavaScript")}>
                JAVA SCRIPT
              </button>
              <button className="" onClick={() => filterItem("Reactjs")}>
                REACT JS
              </button>
              <button className="" onClick={() => filterItem("MERN")}>
                MERN
              </button>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row my-3">
                  {item.map((elem, index) => {
                    const { image, link } = elem;

                    return (
                      <div
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        key={index}
                      >
                        <a href={link} target="_blank" rel="noreferrer">
                          <img
                            src={image}
                            alt="img"
                            className="project_img img-fluid"
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
