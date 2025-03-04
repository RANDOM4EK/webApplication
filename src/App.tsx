import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import Entries from "./component/entries/Entries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/entries" element={<Entries />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
