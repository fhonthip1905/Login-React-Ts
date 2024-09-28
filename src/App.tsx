import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./styles/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}
