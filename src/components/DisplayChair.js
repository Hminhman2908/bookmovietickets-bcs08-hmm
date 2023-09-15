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
      <div className="col-9 mt-5">
        <h5 className="text-center">Màn hình</h5>
        <div className="container p-5">
          <table
            className="table table-bordered text-center"
            style={{ color: "#fcc00b", fontWeight: 400 }}
          >
            <thead>
              <tr>
                <td>#</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
            </thead>
            <tbody>{this.renderListChair()}</tbody>
          </table>
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
