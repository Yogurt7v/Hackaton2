import { Link, Outlet } from "react-router-dom";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";

export const FavoritesPage = () => {
  return (
    <div>
      <Breadcrumbs />
      FavoritesPage
      <Link to="someComponent">В какой-то компонент</Link>
      <Outlet />
    </div>
  );
};
