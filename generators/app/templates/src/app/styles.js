import React from "react";
import { Style } from "radium";

const styles = {
  "body, html, #root, [data-reactroot]": {
    padding: 0,
    margin: 0,
    // TODO Add fontFamily
    // fontFamily: ,
    height: "100%"
  }
};

export default <Style rules={styles} />;
