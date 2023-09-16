import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Typography } from "antd";
import { MAX_NUMBER_SEATS } from "./data";
import "../App.css";
let { Title } = Typography;

export class DisplayChair extends Component {
  renderFirstRow = () => {
    let row = new Array(MAX_NUMBER_SEATS + 1).fill("");
    return row.map((n, i) => {
      if (i < 1) {
        return (
          <Col span={1} key={i}>
            <div className="ghe-header"></div>
          </Col>
        );
      } else {
        return (
          <Col span={1} key={i}>
            <div className="ghe-header">
              <span className="rowNumber">{i}</span>
            </div>
          </Col>
        );
      }
    });
  };
  renderSeats = (row) => {
    let danhSachGhe = [{ soGhe: row.hang }, ...row.danhSachGhe];
    return danhSachGhe.map((seat, i) => {
      if (i < 1) {
        return (
          <Col span={1} key={seat.soGhe}>
            <div className="firstChar">
              <span className="">{row.hang}</span>
            </div>
          </Col>
        );
      } else {
        let isReserved = seat.daDat ? "reserved" : "";
        let isSelected = seat.daChon ? "selected" : "";
        return (
          <Col span={1} key={seat.soGhe}>
            <div
              className={`ghe text-center ${isReserved} ${isSelected}`}
              onClick={() => {
                this.props.handleSelect(seat);
              }}
            >
              <span className="rowNumber">{i}</span>
            </div>
          </Col>
        );
      }
    });
  };
  renderRows = () => {
    let chairArr = [...this.props.chairArr];
    chairArr.shift();
    return chairArr.map((row, index) => {
      return (
        <Row className="mb-3 w-100" key={index} justify={"center"}>
          {this.renderSeats(row)}
        </Row>
      );
    });
  };
  render() {
    return (
      <div className="text-center">
        <Title type="warning" strong>
          Đặt vé xem phim
        </Title>
        <Title level={4} className="text-white">
          Màn hình
        </Title>
        <Row justify={"center"} className="mb-3">
          {this.renderFirstRow()}
        </Row>
        <Row>{this.renderRows()}</Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    chairArr: state.chairArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (seat) => {
      let action = {
        type: "SELECT",
        payload: seat.soGhe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayChair);
