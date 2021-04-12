
import { Route, Switch } from 'react-router';
import './App.css';
import About from './componenet/About/About';
import Contacts from './componenet/Contacts/Contacts';
import Home from './componenet/Home/Home';
import NotFound from './componenet/NotFound/NotFound';

function App() {
  return (

    <div className="App">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>

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
