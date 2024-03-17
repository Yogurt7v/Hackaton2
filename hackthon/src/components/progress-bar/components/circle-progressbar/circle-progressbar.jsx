import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./circle-progressbar.module.css";

export const CircleProgressbar = ({ title, progress, color }) => {
  const PI = Math.PI;
  const R = 45;

  let circumference = 2 * PI * R;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const animateProgress = () => {
      setOffset((circumference - (progress / 100) * circumference).toString());
    };

    setTimeout(animateProgress, 0);
  }, [progress, circumference]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.progressContainer}>
          <span className={styles.progress} style={{ color }}>
            {progress}%
          </span>
        </div>

        <svg width="200" height="200">
          <circle
            strokeWidth={10}
            fill="transparent"
            r={R}
            cx={100}
            cy={100}
            stroke="lightgray"
          />
          <circle
            className={styles.externalCircle}
            strokeWidth={10}
            fill="transparent"
            r={R}
            cx={100}
            cy={100}
            strokeLinecap="round"
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
    </div>
  );
};

CircleProgressbar.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
