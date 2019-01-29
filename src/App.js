import React, { Component } from 'react';
import { Route, Switch,withRouter, BrowserRouter } from "react-router-dom";
import FullContainer from "./components/FullContainer";
import Home from './containers/Home';
import SideBar from './components/Sidebar/Sidebar'
import Calendar from './containers/calendar';
import RangeCalendar from './containers/range-calendar';
import Table from './containers/table';
import About from './containers/About'

import Header from "./pages/Header/Header";
import Cart from "./pages/Cart/cart";
import Helpers from "./service/Helpers";
import asyncComponent from './service/AsyncComponent'
import './App.css';



const HomeCart = asyncComponent(() => import('./pages/Home/Home').then(module => module.default));
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0
    }
  }

  render() {
    let that = this;
    return (<>
      <Switch> 
        <AppRoute exact path="/" layout={FullContainer} component={Home} />
        <AppRoute exact path="/product" layout={FullContainer} component={SideBar} />
        <AppRoute exact path="/calendar" layout={FullContainer} component={Calendar} />
        <AppRoute exact path="/range-calendar" layout={FullContainer} component={RangeCalendar} />
        <AppRoute exact path="/table" layout={FullContainer} component={Table} />
        <AppRoute exact path="/about" layout={FullContainer} component={About} />

        <Route exact path="/main" render={() => <HomeCart totalCnt={(cartCount) => {that.setState({cartCount: cartCount})}}/>}/>
        <Route path="/cart" render={() => <Cart totalCnt={(cartCount) => {that.setState({cartCount: cartCount})}}/>}/>
      </Switch>
      </>
    );
  }
}

export default withRouter(App);  








