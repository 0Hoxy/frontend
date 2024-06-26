import Navbar from "./layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
// BrowserRouter가 Router라는 이름으로 임포트되고, Route와 Routes는 그대로 임포트
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
