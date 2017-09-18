import { white, gray, black } from "../../../utils/colors";
import { small, medium, big } from "../../../constants/fonts";

export default {
  base: {
    color: white,
    fontSize: medium
  },
  small: {
    fontSize: small
  },
  big: {
    fontSize: big
  },
  white: {
    color: white
  },
  gray: {
    color: gray
  },
  black: {
    color: black
  },
  semibold: {
    fontWeight: 600
  },
  bold: {
    fontWeight: 700
  },
  title: {
    margin: "20px 0",
    fontWeight: 500
  },
  onHover: {
    ":hover": {
      fontWeight: 700
    }
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  }
};
