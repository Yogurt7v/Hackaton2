import PropTypes from "prop-types";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import style from "./layout.module.css";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  
  return (
    <div className={style.layout}>
      <div className={style.headerChild}>
        <Header onFavoritePage={true} />
      </div>
        <Breadcrumbs />
        {children}
       </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
