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
          {skills.map((skill) => (
            <div key={skill.label} className="col-lg-3  col-6 column">
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbarWithChildren
                  value={skill.value}
                  styles={buildStyles({
                    pathColor: `rgba(255,210, 0, ${skill.value / 100})`,
                    trailColor: "#222222",
                    height: 100,
                  })}
                >
                  <div style={{ fontSize: 20, marginTop: -10, color: "#ffffff" }}>
                    <strong>{skill.value}%</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h2 className="Title">{skill.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkill;

const skills = [
  { label: "HTML", value: 80 },
  { label: "CSS", value: 70 },
  { label: "JAVA SCRIPT", value: 70 },
  { label: "REACT JS", value: 75 },
  { label: "TYPESCRIPT", value: 70 },
  { label: "NEXT JS", value: 75 },
  { label: "PHASER", value: 70 },
  { label: "ANGULAR", value: 60 },
  { label: "REACT NATIVE", value: 60 },
  { label: "NODE JS", value: 70 },
  { label: "EXPRESS JS", value: 70 },
  { label: "GRAPHQL", value: 60 },
  { label: "JEST", value: 60 },
  { label: "MONGO DB", value: 50 },
  { label: "GIT", value: 80 },
  { label: "GITHUB", value: 70 },
  { label: "CI/CD", value: 60 },
  { label: "DOCKER", value: 60 },
  { label: "AWS", value: 60 },
];
