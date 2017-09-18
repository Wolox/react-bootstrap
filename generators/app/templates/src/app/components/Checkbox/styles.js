import { white, gray } from "../../../utils/colors";

const BUTTON_SIZE = 15;

const buttonStyle = {
  borderWidth: 2,
  borderRadius: 5,
  borderStyle: "solid",
  margin: 10,
  width: BUTTON_SIZE,
  height: BUTTON_SIZE
};

export default {
  container: {
    display: "flex",
    alignItems: "center"
  },
  inactiveButton: {
    ...buttonStyle,
    background: white,
    borderColor: gray
  },
  activeButton: {
    ...buttonStyle,
    background: gray,
    borderColor: gray
  }
};
