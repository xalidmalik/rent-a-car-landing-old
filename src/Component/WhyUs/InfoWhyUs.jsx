import React from "react";
import { useSpring, animated } from "react-spring";

const Infograph = ({ Data, Index }) => {
  const Infomation = useSpring({
    from: { opacity: 0, transform: "translate3d(0px, 10rem, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0, 0px)" },
    config: { mass: 1, tension: 200, friction: 40 },
    delay: 50 * (Index + 1)
  });
  return (
    <animated.div style={Infomation} className="col-12">
      <div className="info info-horizontal" style={{ padding: "2rem 0 2rem" }}>
        <div className="icon icon-rose">
          <i className="material-icons">{Data.Icon}</i>
        </div>
        <div className="description">
          <h3 className="info-title">{Data.Title}</h3>
          <p className="font-weight-light text-muted">{Data.Description}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Infograph;
