import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./About.css";

const MySkill = () => {
  return (
    <div style={{ background: "#111111" }} className="mb-5">
      <div className="heading">
        <h3>My Skills</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={80}
                styles={buildStyles({
                  pathColor: `rgb(252, 210, 0, ${80 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>80%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">HTML</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={70}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${70 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>70%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">CSS</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={66}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${66 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>66%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">JAVA SCRIPT</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={75}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${75 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>75%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">REACT JS</h2>
            </div>
          </div>
          
        </div>
        <div className="row">
        <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={75}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${75 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>75%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">NEXT JS</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={66}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${66 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>66%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">NODE JS</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={66}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${66 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>66%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">GRAPHQL</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={50}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${50 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>50%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">MONGO DB</h2>
            </div>
          </div>
          <div className="col-lg-3  col-6 column">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                value={60}
                styles={buildStyles({
                  pathColor: `rgba(255,210, 0, ${60 / 100})`,
                  trailColor: "#222222",
                  height: 100,
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                  <strong>60%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h2 className="Title">GO</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
