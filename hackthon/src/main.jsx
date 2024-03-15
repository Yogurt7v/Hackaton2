import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { FavoritePage, MainPage, PersonalPage } from "./pages";
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
