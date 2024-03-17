import PropTypes from "prop-types";
import { CircleProgressbar, LineProgressbar } from "./components";

export const ProgressBar = ({ skillInfo, color, type = 'line'}) => {
  console.log('skillInfo:', skillInfo)
  const title = skillInfo[0];
  const progress = skillInfo[1];
  
  return (
    type === 'line' ?  
    <LineProgressbar title={title} progress={progress} color={color} />
    :
    <CircleProgressbar title={title} progress={progress} color={color}/>
  );
};

ProgressBar.propTypes = {
  skillInfo: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string
}