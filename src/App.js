import logo from "./logo.svg";
import {
  Navbar,
  Welcome,
  Transation,
  Lastesttransation,
  Footbar,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Transation />

      <Lastesttransation />
      <Footbar />
    </div>
  );
}

export default App;
