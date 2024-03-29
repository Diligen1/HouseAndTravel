import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../Pages/Main/Main";
import { Register } from "../Pages/Register/Register";
import { About } from "../Pages/About us/About";
import { Review } from "../Pages/Reviews/Review";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
