import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Destination from "./pages/Destination";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
