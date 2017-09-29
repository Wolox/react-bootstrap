import React from "react";
import PropTypes from "prop-types";

import Button from "../../../../components/Button";
import Label from "../../../../components/Label";

import styles from "./styles";

export default function Home({ onLogout }) {
  return (
    <div style={styles.container}>
      <Button onPress={onLogout} style={styles.mainButton}>
        <Label>Logout!</Label>
      </Button>
    </div>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired
};
