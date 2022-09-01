import { Route } from "react-router-dom";
import "./App.css";
// import AddForm from "./components/addMusic/AddForm";
import Header from "./components/Header";
import GlobalRouter from "./global/GlobalRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalRouter />
    </div>
  );
}

export default App;
