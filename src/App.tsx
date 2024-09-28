import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={"Hello Login Page"} />
          <Route path="/dashboard" element={"Hello DashBoard Page"} />
        </Routes>
      </Router>
    </div>
  );
}
