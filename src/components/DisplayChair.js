import React, { Component } from "react";
import { connect } from "react-redux";
import { ItemChair } from "./ItemChair";

export class DisplayChair extends Component {
  renderListChair = () => {
    return this.props.chairArr.map((item, index) => {
      return <ItemChair item={item} key={index} />;
    });
  };
  render() {
    return (
      <div className="col-9">
        <h5 className="text-center">Màn hình</h5>
        <div className="container">
          <table className="text-center ml-5">{this.renderListChair()}</table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    chairArr: state.chairArr,
  };
};

export default connect(mapStateToProps)(DisplayChair);
