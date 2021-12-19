import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import about from "../images/about.png";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  about: {
    textAlign: "center",
    marginTop: "100px",
  },
  aboutLeft: {},
  img: {
    width: "400px",
  },
  aboutRight: {
    marginTop: "100px",
  },
});
export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Grid container direction="row" xs={12}>
        <Grid item xs={1} md={6} className={classes.aboutLeft}>
          <img className={classes.img} src={about} alt="123" />
        </Grid>
        <Grid className={classes.aboutRight} item xs={1} md={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          similique. At, ut repudiandae. Numquam fugit aperiam, eveniet soluta
          exercitationem animi voluptas accusantium illo dignissimos.
          Exercitationem harum in iure voluptatum fuga?
        </Grid>
      </Grid>
    </div>
  );
}
