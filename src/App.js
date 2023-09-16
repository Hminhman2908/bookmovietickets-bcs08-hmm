import { Col, Row } from "antd";
import "./App.css";
import CartChair from "./components/CartChair";
import DisplayChair from "./components/DisplayChair";

function App() {
  return (
    <div className="theater mt-5">
      <Row justify={"center"}>
        <Col xl={15} sm={24}>
          <DisplayChair />
        </Col>
        <Col xl={5} sm={20}>
          <CartChair />
        </Col>
        <Col xl={4} sm={0}></Col>
      </Row>
    </div>
  );
}

export default App;
