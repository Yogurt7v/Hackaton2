import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritePage, MainPage, PersonalPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team/:id" element={<PersonalPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  </BrowserRouter>
);
