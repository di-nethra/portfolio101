import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Hero.css";
import me from "../images/me3.png";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  hero: {
    display: "flex",
    height: "100vh",
  },
  heroLeft: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
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
    marginTop: "100px",
  },
  greeting: {
    fontSize: "30px",
    fontWeight: "300",
    marginBottom: "10px",
  },
  name: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "50px",
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
  btn: {
    marginTop: "20px",
    backgroundColor: "#002450",
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.heroLeft}>
          <div className={classes.leftWrapepr}>
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
            <Button
              className={classes.btn}
              variant="contained"
              size="large"
              color="primary"
            >
              Contact Me
            </Button>
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
