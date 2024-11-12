import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/pages/Index";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}