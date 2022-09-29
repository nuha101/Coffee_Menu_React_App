import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="menu">
        <h1>Coffee Menu</h1>
        <Menu id="1" name="Cappuccino" price="12SR" />
        <Menu id="2" name="Espresso" price="18SR" />
        <Menu id="3" name="Americano" price="18SR" />
        <Menu id="4" name="Latte" price="13SR" />
        <Menu id="5" name="Mocaccino" price="15SR" />
        <Menu id="6" name="Frappi" price="20SR" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
