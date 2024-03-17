import { CircleProgressbar, LineProgressbar } from "./components";

// eslint-disable-next-line react/prop-types
export const ProgressBar = ({ skillInfo, color, type = "line" }) => {
  const title = skillInfo[0];
  const progress = skillInfo[1];

  return type === "line" ? (
    <LineProgressbar title={title} progress={progress} color={color} />
  ) : (
    <CircleProgressbar title={title} progress={progress} color={color} />
  );
};
