import React, { Component } from "react";
import { connect } from "react-redux";
import "./ItemChair.css";

export class ItemChair extends Component {
  render() {
    let { hang, danhSachGhe } = this.props.item;
    console.log(danhSachGhe[0].soGhe);
    return (
      <tbody>
        <tr>
          <th>{hang}</th>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[0].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[1].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[2].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[3].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[4].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[5].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[6].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[7].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[8].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[9].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[10].soGhe}
            </button>
          </td>
          <td>
            <button className="btn-click btn-success">
              {danhSachGhe[11].soGhe}
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemChair);
