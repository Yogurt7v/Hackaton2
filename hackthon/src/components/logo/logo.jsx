import style from "./logo.module.css";

export const Logo = ({alt, text, logo}) => {
    return (
        <div className={style.userPageinfo}>
          <img src={logo} alt={alt} className={style.logo}/>
          <p>{text}</p>
        </div>
    );
}