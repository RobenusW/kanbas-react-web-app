import Labs from "./Labs";
import Kanbas from "./Kanbas";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Kanbas/Dashboard";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
       <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Dashboard />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
