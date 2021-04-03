import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//Components
import Home from './components/Home';
import Cart from './components/Cart';
import Deals from './components/Deals';

//Styles
import './app.scss';


const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/deals" component={Deals} />
       <Route path="/cart" component={Cart} />
     </Switch>
   </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
