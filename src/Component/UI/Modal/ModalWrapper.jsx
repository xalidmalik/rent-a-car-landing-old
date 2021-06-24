import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";

class ModalWrapper extends Component {
  state = {
    modalShow: false
  };

  ToggleModalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  render() {
    return (
      <Transition
        native
        reset
        unique
        items={this.state.modalShow}
        from={{ transform: "translateY(200%)", height: "100%" }}
        enter={{ opacity: 1, transform: "translateY(0rem)", height: "100%" }}
        leave={{ transform: "translateY(200%)", height: "100%" }}
        config={{ mass: 1, tension: 400, friction: 40 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div
              style={props}
              className="modal-wrapper bg-white-gradient"
            >
              {/* <div className="modal-children overflow-auto"> */}
              {this.props.children}
              {/* </div> */}
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}
export default ModalWrapper;
