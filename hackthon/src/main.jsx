import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, PersonalPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team/:id" element={<PersonalPage />} />
    </Routes>
  </BrowserRouter>
);
