import React from "react";
import styled from "styled-components";

const Heading = (props) => {
  // console.log(props);
  return (
    <Wrap>
      <section>
        <div className="">
          <h1 className="heading_background">{props.bgHeading}</h1>
          <h3 className="heading">
            {props.TitleHeading}
            <span className="mt-2">
              {"  "} {props.TitleHeadingSpan}
            </span>
          </h3>
        </div>
      </section>
    </Wrap>
  );
};

export default Heading;

const Wrap = styled.div`
  section {
    display: flex;
    justify-content: center;
    text-align: center;
    .heading_background {
      color: #222222;
      font-size: 6.87rem;
      line-height: 0.7;
      letter-spacing: 5px;
      text-align: center;
      font-weight: 800px;
      font-family: "Goblin One", cursive;
      margin-top: 2rem;
      text-transform: uppercase;
    }
    .heading {
      text-align: center;
      font-size: 56px;
      text-transform: uppercase;
      color: #fff;
      font-weight: 900;
      position: relative;
      top: -90px;
    }
    h3 {
      span {
        color: #ffb912;
      }
    }
  }
`;
