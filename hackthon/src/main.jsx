import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { FavoritePage, MainPage, PersonalPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
