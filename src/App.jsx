import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UploadedFiles from "./pages/UploadedFiles.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/uploaded-files" element={<UploadedFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
