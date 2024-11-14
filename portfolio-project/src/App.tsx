// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/pages/Index";

export default function App() {

  // const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  
  return (
    <Index />
    // <Router basename="/">
    //   <Routes>
    //     <Route path="/" element={<Index />} />
    //     <Route path={baseUrl} element={<Navigate to="/" replace />} />
    //   </Routes>
    // </Router>
  );
}