// import React, { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    size: {
      padding: "0",
    },
    media: {
      paddingTop: "56.25%", // 16:9
    },
    btn: {
      margin: "0 0 10px 10px",
    }
  })
);

export default function Recipelist({recipe}) {
  const classes = useStyles();

  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={recipe["recipe"]["image"]}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h5" color="textSecondary" component="p">
              {recipe["recipe"]["label"]}
            </Typography>
          </CardContent>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={() => window.open(recipe["recipe"]["url"])}
          >
            Get Recipe
          </Button>
        </Card>
        
      </>
    )
  );
}
