import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Hero.css";
const useStyles = makeStyles({
  hero: {
    display: "flex",
    height: "100vh",
  },
  heroLeft: {
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    flex: "1",
  },
  heroRight: {
    flex: "1",
  },
  leftWrapepr: {
    padding: "50px",
    height: "50%",
    display: "flex",
    flexDirection: "column",
  },
  greeting: {
    fontSize: "30px",
    fontWeight: "300",
  },
  name: {
    fontSize: "60px",
  },
  title: {
    height: "50px",
    overflow: "hidden",
  },
  titleWrapper: {
    height: "100%",
  },
  titleItem: {
    height: "50px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#000080",
    display: "flex",
    alignItems: "center",
  },
  heroPara: {},
});

export default function Hero() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.heroLeft}>
          <div
            style={{ justifyContent: "space-between" }}
            className={classes.leftWrapepr}
          >
            <h2 className={classes.greeting}>Hello My name is</h2>

            <h1 className={classes.name}>Anjana Samarakoon</h1>
            <div className={classes.title}>
              <div className="titleWrapper">
                <div className={classes.titleItem}>Full Stack Developer</div>
                <div className={classes.titleItem}>Android Developer</div>
                <div className={classes.titleItem}>Tech Enthusiast</div>
                <div className={classes.titleItem}>Blogger</div>
              </div>
            </div>
            <div className={classes.heroPara}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              illo ipsa maxime adipisci sequi facere veniam debitis beatae, amet
              deserunt pariatur vitae nemo fugiat. Facere similique voluptate
              fugiat iure ducimus?
            </div>
          </div>
        </div>
        <div className={classes.heroRight}>
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
}
