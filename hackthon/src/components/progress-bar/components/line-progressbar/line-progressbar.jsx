import style from './line-progressbar.module.css';

export const LineProgressbar = ({title, progress, color}) => (
  <div className={style.progressBarContainer}>
    <h2>{title}</h2>
    <div className={style.progressBar}>
      <div
        className={style.progressBarInner}
        style={{ width: `${progress}%`, backgroundColor: `${color}` }}
      >
        {progress}%
      </div>
    </div>
  </div>
);