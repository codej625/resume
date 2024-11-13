import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/pages/Index";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path={import.meta.env.VITE_APP_BASE_URL} element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}