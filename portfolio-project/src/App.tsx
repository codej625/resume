import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/pages/Index";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}