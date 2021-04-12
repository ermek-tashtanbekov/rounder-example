
import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import About from './componenet/About/About';
import Contacts from './componenet/Contacts/Contacts';
import Home from './componenet/Home/Home';
import NotFound from './componenet/NotFound/NotFound';

function App() {
  const activeLInk ={
    fontWeight : "bold",
  }
  return (
  
    <div className="App">
      <ul>
        <li><NavLink activeStyle={activeLInk} activeClassName="activeLInk" exact to="/">Home</NavLink></li>
        <li><NavLink activeStyle={activeLInk} activeClassName="activeLInk" to="/about">About</NavLink></li>
        <li><NavLink activeStyle={activeLInk} activeClassName="activeLInk" to="/contacts">Contacts</NavLink></li>
      </ul>


      {/* <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contacts">Contacts</Link></li>
      </ul> */}

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>





      {/* <Route path="/" component={Home} /> Переадресатция Слок*/}
    </div>
  );
}

export default App;
