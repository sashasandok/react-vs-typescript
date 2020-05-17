import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Info page</h1>
      <button className="btn" onClick={() => history.push("/")}>
        go to todos
      </button>
    </>
  );
};

export default AboutPage;
