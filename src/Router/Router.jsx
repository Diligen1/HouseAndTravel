import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../Pages/Main/Main";
import { Register } from "../Pages/Register/Register";
import { Author } from "../Pages/Authorization/Author";
import { Review } from "../Pages/Reviews/Review";
import { News } from "../Pages/News/News";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author" element={<Author />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
