
import { Route } from 'react-router';
import './App.css';
import About from './componenet/About/About';
import Contacts from './componenet/Contacts/Contacts';
import Home from './componenet/Home/Home';

function App() {
  return (
    <div className="App">
     <Route path="/about" component={About} />
     <Route path="/contacts" component={Contacts} />
     <Route path="/" component={Home} />
    </div>
  );
}

export default App;
