import React from "react";
import { classNames } from "shared/lib/classNames/classNames";

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
