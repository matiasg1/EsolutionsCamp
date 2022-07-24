import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User.js/User";

const useStyles = createUseStyles({
  wrapper: {
    boxShadow: "rgb(0 0 0 / 15%) 0px 3px 3px",
    height: 50,
    padding: [15, 10],
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgb(30, 68, 230)",
    zIndex: "1",
  },
  welcome: {
    display: "flex",
    width: "100%",
    fontSize: 20,
    gap: 5,
    justifyContent: "right",
    paddingRight: 60,
  }
});

export default function Header() {
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.welcome}>
        Bienvenido <b>{user.name}</b>
      </div>
    </div>
  );
}
