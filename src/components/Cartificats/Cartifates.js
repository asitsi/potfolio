import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Card from "./Card";
import "./cartifates.css";
import BounceLoader from "react-spinners/BounceLoader";

const Cartifates = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Wrap>
      <Heading
        bgHeading="knowledge"
        TitleHeading="my"
        TitleHeadingSpan="certificate's"
      />
      {loading ? (
        <div className="preloader">
          <BounceLoader color={"#ffb400"} loading={loading} size={100} />
        </div>
      ) : (
        <Card />
      )}
    </Wrap>
  );
};

export default Cartifates;

const Wrap = styled.div`
  background: #111111;
  height: 100%;
`;
