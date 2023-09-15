import "./App.css";
import { CartChair } from "./components/CartChair";
import DisplayChair from "./components/DisplayChair";

function App() {
  return (
    <div className="layout">
      <header>
        <h1 className="text-center">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
      </header>
      <section>
        <div className="row">
          <DisplayChair />
          <CartChair />
        </div>
      </section>
      <div className="bg-img">
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default App;
