import React from "react";
import Question from "../../screens/Question/Question";
import Welcome from "../../screens/Welcome/Welcome";
const index = () => {
  return (
    <>
      <Question curStep={1} totalStep={6} />
      <Welcome />
    </>
  );
};

export default index;
