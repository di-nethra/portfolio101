import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Hero.css";
import me from "../images/me3.png";
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
    position: "relative",
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
    fontWeight: "bold",
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
    color: "#002450",
    display: "flex",
    alignItems: "center",
  },
  heroPara: {},
  rightMe: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  imageBG: {
    clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
    backgroundColor: "#002450",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    right: "0",
  },
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
            <h2 className={classes.greeting}>Hello, I am</h2>

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
          <div className={classes.imageBG}></div>
          <img src={me} alt="myimage" className={classes.rightMe} />
        </div>
      </div>
    </div>
  );
}
