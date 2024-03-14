import style from "./progress-bar.module.css"


// eslint-disable-next-line react/prop-types
export const ProgressBar = ({progress}) => {
    return (
        <div className={style.progressBar}>
            <div className={style.progressBarInner} style={{width: `${progress}%`}}>{progress}%</div>
        </div>
    )
}