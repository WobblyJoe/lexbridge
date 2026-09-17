import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Intake from "./pages/Intake";
import Processing from "./pages/Processing";
import Dashboard from "./pages/Dashboard";
import Queue from "./pages/Queue";
import Brief from "./pages/Brief";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/brief" element={<Brief />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;