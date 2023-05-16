import React from "react";
import { classNames } from "../../utils/classNames/classNames";

const About = () => {
  return (
    <div
      className={classNames("example", ["one", "two"], {
        three: true,
        four: false,
      })}
    >
      About
    </div>
  );
};

export default About;
