import React, { Component } from "react";
import { connect } from "react-redux";
import "./ItemChair.css";

export class ItemChair extends Component {
  render() {
    let { hang, danhSachGhe } = this.props.item;
    return (
      <tr>
        <td>{hang}</td>
        <td>
          <div className="btn-book">{danhSachGhe[0].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[1].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[2].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[3].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[4].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[5].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[6].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[7].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[8].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[9].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[10].soGhe}</div>
        </td>
        <td>
          <div className="btn-book">{danhSachGhe[11].soGhe}</div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemChair);
