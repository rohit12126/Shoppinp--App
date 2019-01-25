import React, { Component } from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import FullContainer from "./components/FullContainer";
import Home from './containers/Home';
import About from './containers/About'
  
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)
class App extends Component {
  render() {
    return (
      <Switch> 
        <AppRoute exact path="/" layout={FullContainer} component={Home} />
        <AppRoute exact path="/about" layout={FullContainer} component={About} />
      </Switch>
    );
  }
}

export default withRouter(App);  
