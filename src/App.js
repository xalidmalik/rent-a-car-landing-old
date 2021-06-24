import React, { useContext } from "react";
import Home from "./Pages/Home";
import WhyUs from "./Pages/WhyUs";
import { Route, Switch, __RouterContext } from "react-router-dom";
import About from "./Pages/About";
import MainLayout from "./Component/Layout/MainLayout";
import AvailableCars from "./Pages/AvailableCars";
import { useTransition, animated } from "react-spring";
import Contact from "./Pages/Contact";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transition = useTransition(location, location => location.pathname, {
    from: {
      opacity: 1,
      transform: "translate3d(0,100%,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0%,0)"
    },
    leave: {
      opacity: 1,
      transform: "translate3d(0,100%,0)"
    },
    config: { mass: 1, tension: 300, friction: 40 }
  });
  return (
    <MainLayout>
      {transition.map(({ key, item, props }) => (
        <animated.div key={key} style={props} className="page-transition">
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route path="/neden-biz" component={WhyUs} />
            <Route path="/hakkimizda" component={About} />
            <Route path="/iletisim" component={Contact} />
            <Route path="/mevcut-arabalar" component={AvailableCars} />
          </Switch>
        </animated.div>
      ))}
    </MainLayout>
  );
};

export default App;
