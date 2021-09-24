import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// 142d7c9ab2004f6c87aaf0a6e476fa54
export default class App extends Component {
  // dark Mode/Light Mode
  constructor(props) {
    super(props);
    this.state = {mode: 'light'};
    this.togglemode = this.togglemode.bind(this);
  }
  // const [mode, setmode] = useState("light");

  togglemode() {
    if(this.state.mode ==='light'){
      this.setState({
        mode:'dark'
      });
      document.body.style.backgroundColor = "black"
    }
    else{
      this.setState({
        mode:'light'
      });
      document.body.style.backgroundColor = "white"
    }
  }
  ApiKey=process.env.REACT_APP_NEWS_API_KEY
  render() {
    return (
      <div>
        <Router>
        <NavBar mode={this.state.mode} toggle={this.togglemode}/>
        <Switch>
            <Route exact path="/"><News mode={this.state.mode} toggle={this.togglemode} apiKey={this.ApiKey} key="general" country="in" category="general"/></Route>
            <Route exact path="/business"><News mode={this.state.mode} apiKey={this.ApiKey} key="business" country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News mode={this.state.mode} apiKey={this.ApiKey} key="entertainment" country="in" category="entertainment"/></Route>
            <Route exact path="/health"><News mode={this.state.mode} apiKey={this.ApiKey} key="health" country="in" category="health"/></Route>
            <Route exact path="/science"><News mode={this.state.mode} apiKey={this.ApiKey} key="science" country="in" category="science"/></Route>
            <Route exact path="/sports"><News mode={this.state.mode} apiKey={this.ApiKey} key="sports" country="in" category="sports"/></Route>
            <Route exact path="/technology"><News mode={this.state.mode}  apiKey={this.ApiKey}key="technology" country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


            