import "./App.css";
import { CartChair } from "./components/CartChair";
import DisplayChair from "./components/DisplayChair";

function App() {
  return (
    <div>
      <header>
        <h1 className="text-center">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
      </header>
      <section>
        <div className="row">
          <DisplayChair />
          <CartChair />
        </div>
      </section>
    </div>
  );
}

export default App;
