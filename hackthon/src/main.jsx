import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { FavoritePage, MainPage, PersonalPage, TestPage } from "./pages";

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
        element: <FavoritePage />,
        handle: { crumb: () => <Link to="/favourites">Избранное</Link> },
      },
      {
        path: "testPage",
        element: <TestPage />,
        handle: { crumb: () => <Link to="/testPage">Тест</Link> },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
