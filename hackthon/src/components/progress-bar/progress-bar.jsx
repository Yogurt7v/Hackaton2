import style from "./progress-bar.module.css";

// eslint-disable-next-line react/prop-types
export const ProgressBar = ({ progress, color, title  }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={style.progressBar}>
        <div
          className={style.progressBarInner}
          style={{ width: `${progress}%`, backgroundColor: `${color}` }}
        >
          {progress}%
        </div>
      </div>
    </>
  );
};
