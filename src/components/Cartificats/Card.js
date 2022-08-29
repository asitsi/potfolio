import React, { useState } from "react";
import styled from "styled-components";
import Data from "./Data";

const Card = () => {
  const [item, setItem] = useState(Data);
  return (
    <Wrap>
      <div className="main_div">
        {item.map((elem, index) => {
          return (
            <div className="card" key={index}>
              <div className="imgeffact">
                <img src={elem.image} alt="img" />
              </div>
              <div className="Card_content">
                <h1>{elem.heading} </h1>
              </div>
              <a href={elem.image}>Full Screen</a>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};

export default Card;

const Wrap = styled.div`
  .main_div {
    position: relative;
    /* width: 1100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .card {
      height: 190px;
      width: 320px;
      position: relative;
      background: #fff;
      margin: 2rem 1rem 1rem 0px;
      padding: 20px 15px 0px 15px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
      transition: 0.4s ease-in-out;
      border-radius: 6px 6px 12px 12px;
      @media (max-width: 900px) {
         {
          margin-top: 1.5rem;
        }
      }
      :hover {
        height: 90%;
        width: 320px;
      }
      .imgeffact {
        height: 190px;
        width: 260px;
        position: relative;
        top: -50px;
        left: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        img {
          max-width: 100%;
          border-radius: 4px;
        }
      }
      .Card_content {
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: #111;
        visibility: hidden;
        opacity: 0;
        transition: 0.4s ease-in-out;
      }
      :hover .Card_content {
        visibility: visible;
        opacity: 1;
        margin-top: -40px;
        h1 {
          color: #333;
          font-size: 32px;
        }
        /* p {
          font-size: 14px;
          color: #b4b4b4;
          font-family: "Poppins", sans-serif;
          padding-left: 5px;
        } */
      }
      a {
        visibility: hidden;
        opacity: 0;
      }
      :hover a {
        visibility: visible;
        opacity: 1;
        margin-top: -5px;
        /* border: 2px solid #333; */
        padding: 10px 10px;
        color: #333;
        font-size: auto;
        text-decoration: none;
        border-radius: 5px;
        position: relative;
        top: 2px;
        left: -17px;
        width: 112%;
        text-align: center;
        background-color: #ffb912;
        color: #fff;
        border-radius: 0rem 0rem 1rem 1rem;
      }
    }
    @media (max-width: 900px) {
       {
        padding: 3rem 0 2rem 0;
      }
    }
  }
`;
