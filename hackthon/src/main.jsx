// import "./index.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MainPage, PersonalPage } from "./pages";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//       <Route path="/team/:id" element={<PersonalPage />} />
//     </Routes>
//   </BrowserRouter>
// );

import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { MainPage, PersonalPage } from "./pages";
import { FavoritesPage } from "./pages/favorites/favorites-page";
import { SomeComponent } from "./pages/SomeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    handle: { crumb: () => <Link to="/">Главная</Link> },
    children: [
      {
        path: "team/:id",
        element: <PersonalPage />,
        handle: { crumb: ({ id }) => <Link to={`/team/${id}`}>Участник</Link> },
      },
      {
        path: "favourites",
        element: <FavoritesPage />,
        handle: { crumb: () => <Link to="/favourites">Избранное</Link> },
        children: [
          {
            path: "someComponent",
            element: <SomeComponent />,
            handle: {
              crumb: () => <Link to="/someComponent">Какой-то компонент</Link>,
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
