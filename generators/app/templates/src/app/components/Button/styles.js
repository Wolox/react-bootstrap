import { black, white, gray } from "../../../utils/colors";
import { big, medium, small } from "../../../constants/fonts";

export default {
  base: {
    fontSize: medium,
    fontWeight: 400,
    color: black,
    background: white,
    borderRadius: 4,
    border: `1px solid ${black}`,
    padding: "6px 30px",
    cursor: "pointer",
    outline: 0
  },
  small: {
    fontSize: small
  },
  big: {
    fontSize: big
  },
  disabled: {
    color: gray,
    border: `1px solid ${gray}`,
    boxShadow: "none"
  },
  borderless: {
    border: 0
  },
  baseLink: {
    fontSize: medium,
    fontWeight: 400,
    background: white,
    borderRadius: 4,
    border: `1px solid ${black}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 240,
    margin: "auto"
  },
  linkContent: {
    color: black,
    padding: "6px 30px",
    textDecoration: "none"
  }
};
