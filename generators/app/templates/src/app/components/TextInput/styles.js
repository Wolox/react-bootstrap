import { gray, black } from "../../../utils/colors";
import { medium } from "../../../constants/fonts";

const iconSize = 40;
const formElementsWidth = "85%";

export default {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 12
  },
  inputContainer: {
    width: formElementsWidth,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  errorsContainer: {
    width: formElementsWidth,
    textAlign: "right"
  },
  icon: {
    height: iconSize,
    width: iconSize,
    marginRight: 15,
    marginTop: "auto"
  },
  textInputWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%"
  },
  textInputWrapperWithDesc: {
    height: 50
  },
  input: {
    width: "100%",
    paddingBottom: 5,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    outline: 0,
    borderBottom: `1px solid ${gray}`,
    fontSize: medium,
    color: black,
    marginTop: "auto"
  },
  inputWithDesc: {
    marginBottom: 7
  },
  expandedInput: {
    width: "100%"
  }
};
