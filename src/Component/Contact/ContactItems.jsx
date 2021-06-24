import React from "react";
import { useSpring, animated } from "react-spring";

const ContactItems = ({ Data, Index }) => {
  const Infomation = useSpring({
    from: { opacity: 0, transform: "translate3d(0px, 10rem, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0, 0px)" },
    config: { mass: 1, tension: 200, friction: 40 },
    delay: 50 * (Index + 2)
  });
  return (
    <animated.div style={Infomation} className="col-36">
      <div
        className="info contact p-0"
        style={{ padding: "2rem 0 2rem", maxWidth: "unset" }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="icon icon-rose">
            <i className="material-icons">{Data.Icon}</i>
          </div>
          <div className="contact-description">
            <h5 className="info-title m-0" style={{ maxWidth: "unset" }}>
              {Data.Title}
            </h5>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactItems;
