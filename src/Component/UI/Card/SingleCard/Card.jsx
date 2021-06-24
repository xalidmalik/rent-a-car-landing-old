import React, { Component } from "react";
import ModalWrapper from "../../Modal/ModalWrapper";
import CardImage from "../CardImage";
import CardBody from "./CardBody";
import CardPrice from "./CardPrice";
import CardDetail from "../Details/CardDetail";

class Card extends Component {
  OpenModal = () => {
    this.refs.modal.ToggleModalShow();
  };

  render() {
    const { Cars } = this.props;
    return (
      <>
        <div className="card mb-3 shadow-sm">
          <div className="row card-height m-0 d-flex align-items-center">
            <div className="col-16 col-lg-10 col-xl-10 p-0 h-100">
              <CardImage
                Img={Cars.VisualId}
                Alt={Cars.Name}
                AddClass="py-5 h-100"
                AddClassImg="w-100"
              />
            </div>
            <div className="col col-lg col-xl-16  p-0 h-100">
              <CardBody Cars={Cars} />
            </div>
            <div className="col-36 col-lg-36 col-xl-10 p-0 h-100">
              <CardPrice OnClick={this.OpenModal} Cars={Cars} />
            </div>
          </div>
        </div>
        <ModalWrapper ref="modal">
          <CardDetail Cars={Cars} Close={this.OpenModal} />
        </ModalWrapper>
      </>
    );
  }
}

export default Card;
