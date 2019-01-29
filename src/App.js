import React, { Component } from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import FullContainer from "./components/FullContainer";
import Home from './containers/Home';
import SideBar from './components/Sidebar/Sidebar'
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
        <AppRoute exact path="/home" layout={FullContainer} component={SideBar} />
        <AppRoute exact path="/about" layout={FullContainer} component={About} />
        {/* <AppRoute exact path="/about" layout={FullContainer} component={About} /> */}
      </Switch>
    );
  }
}

export default withRouter(App);  
