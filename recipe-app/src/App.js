import Axios from "axios";
import { useState } from "react";
import Recipelist from "./components/Recipelist";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300',
    textAlign: 'center',
  },
  form: {
    margin: '40px 0',
  },
  text_filed: {
    margin: theme.spacing(1),
    width: '25ch',
    height: '5ch',
  },
  btn: {
    marginBottom: '-50px',
    marginLeft: '10px',
  },
  item: {
    width: '20%',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
}));

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = process.env.REACT_APP_ID
  const YOUR_APP_KEY = process.env.REACT_APP_KEY

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h4">
          Welcome to recipe App
        </Typography>
        <Typography variant="h4" onClick={getRecipeInfo}>🍔 Recipe App 🍔</Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField className={classes.text_filed} id="standard-basic" label="
ingredient Name" value={query}
            onChange={(e) => setquery(e.target.value)} />

          <Button className={classes.btn} type="submit" value="Search" variant="outlined" color="primary">
            Search
          </Button>

        </form>
        <h1>Search Recipes</h1>
      </Container>
      <Container>
        <Grid container>
          {recipes !== [] &&
            recipes.map((recipe) => {
              return (
                <Grid item className={classes.item} xs={12} md={6} lg={4}>
                  <Recipelist key="item" recipe={recipe} />
                </Grid>
              )
            })}
        </Grid>
      </Container >
    </>
  );
}

export default App;


// https://api.edamam.com/search?q=$banana&app_id=$45addbed&app_key=$e097e50689feb88c8e77f444548db3b3&from=0&to=10