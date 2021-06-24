import React from "react";
import { useSpring, animated } from "react-spring";

const PageLayout = props => {
  // const HeroFromTo = useSpring({
  //   from: { opacity: 0 },
  //   opacity: 1,
  //   config: { mass: 1, tension: 200, friction: 40 },
  //   delay: 150
  // });
  return (
    <div className="h-100 w-100">
      <div className="container h-100 w-100 d-flex align-items-center">
        <div className="row d-flex w-100 justify-content-center">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
