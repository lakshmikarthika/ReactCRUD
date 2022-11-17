import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="App">
        React CRUD Operations
        <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/update" element={<Update/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
