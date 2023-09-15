import { Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { Component } from "react";
import { connect } from "react-redux";

export class CartChair extends Component {
  render() {
    return (
      <div className="col-3 mt-5">
        <h5 className="text-center">Danh sách ghế bạn chọn</h5>
        <Row align={"bottom"} className="mb-2 mt-5">
          <div className="ghe reserved mr-3"></div>
          <Title level={5} className="text-white">
            Ghế đã đặt
          </Title>
        </Row>
        <Row align={"bottom"} className="mb-2">
          <div className="ghe selected mr-3"></div>
          <Title level={5} className="text-white">
            Ghế đang chọn
          </Title>
        </Row>
        <Row align={"bottom"} className="mb-2">
          <div className="ghe mr-3"></div>
          <Title level={5} className="text-white">
            Ghế chưa đặt
          </Title>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartChair);
