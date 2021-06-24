import React from "react";
import { heroHigh, heroMed } from "../../Helpers/Static";
import { useSpring, animated } from "react-spring";

const Hero = () => {
  const HeroFromTo = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { mass: 1, tension: 200, friction: 40 },
    delay: 550
  });
  return (
    <animated.div style={HeroFromTo}>
      <div className="up d-flex align-items-center">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <img
                  className="CarImage"
                  src={heroHigh}
                  width="100%"
                  alt="Ayaz Araç Kiralama | Kastamonu Araç Kiralama"
                  srcSet={heroMed}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
export default Hero;
