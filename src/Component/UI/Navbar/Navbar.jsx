import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, NavLinkProps } from "../../../Helpers/Static";
import { Spring } from "react-spring/renderprops";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Spring
          from={{ opacity: 0, marginTop: "-7.5rem" }}
          to={{ opacity: 1, marginTop: "0" }}
          config={{ mass: 1, tension: 200, friction: 40 }}
        >
          {props => (
            <div
              className="container-fluid position-fixed header-index bg-light shadow-sm"
              style={props}
            >
              <div className="container">
                <nav className="navbar navbar-expand-lg h-7-5 ">
                  <NavLink
                    exact
                    to="/"
                    className="navbar-brand"
                    activeClassName="active"
                  >
                    <img
                      src={Logo}
                      height="50"
                      alt="Ayaz Araç Kiralama | Kastamonu Araç Kiralama"
                    />
                  </NavLink>
                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon" />
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="navbar-nav ml-auto">
                      {NavLinkProps.map((i, index) => {
                        return (
                          <NavLink
                            key={index}
                            exact
                            to={i.Path}
                            className="nav-item nav-link"
                            activeClassName="active"
                          >
                            {i.Title}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </Spring>
      </>
    );
  }
}

export default Navbar;
