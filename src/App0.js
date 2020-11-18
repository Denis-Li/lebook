import React from 'react';
import './App0.css';
import Test from './Test';
// import Header from './Header/Header';
import Goods from './Goods';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import About from './About';
import Users from './Users';
import UserId from './UserId';
import Error from './Error';
import Event from './Event';
import Unit6 from './Unit6';
import Unit6Function from './Unit6Function';


import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// const headerData = {
//   site_name : 'My test site name',
//   nav : [
//     {"link" : "nav1", "text" : "my link"},
//     {"link" : "nav2", "text" : "my link2"},
//     {"link" : "nav3", "text" : "my link3"},
//   ]
// };

const goods = [
  {"title" : "apple", "cost" : 330, "image" : "https://cdn2.iconfinder.com/data/icons/food-icons-6/200/food_apple-512.png"},
  {"title" : "grape", "cost" : 550, "image" : "https://cdn2.iconfinder.com/data/icons/food-icons-6/200/food_grapes-512.png"},
  {"title" : "strawberry", "cost" : 660, "image" : "https://cdn2.iconfinder.com/data/icons/food-icons-6/200/food_strawberry-512.png"}
]


const App = () => {
  return (
    <>
      {/* <Header data={headerData} /> */}
      <Router>
        <nav>
          <li><NavLink to="/" exact activeClassName="primer">Main</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Test />
      <Event />
      <Unit6 arg={77} p1={88} />
      <Unit6Function arg={77} />
      {goods.map( item => <Goods title={item.title} cost={item.cost} image={item.image} key={item.image} />)}
      <Footer />
    </>
  );
}

export default App;
