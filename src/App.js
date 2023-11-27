import "./App.css";
import Create from "./Components/Create";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "#F1EAFF" , height:"100vh" }}>
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route index element={<Home />}></Route>
          <Route path={`/:id`} element={<BlogDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
