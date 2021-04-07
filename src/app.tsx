import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//Components & Pages
import Nav from './components/Nav';
import {
  Cart,
  Deals,
  Home
} from './pages';

//Styles
import './app.scss';


const App: React.FC = () => {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/deals" component={Deals} />
       <Route path="/cart" component={Cart} />
     </Switch>
   </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
