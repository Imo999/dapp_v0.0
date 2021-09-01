import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home.js';
import Account from './pages/Account.js';
import Transfert from './pages/Transfert.js';
import ComingSoon from './pages/ComingSoon.js';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Account' component={Account} />
      <Route exact path='/Transfer' component={Transfert} />
      <Route exact path='/ComingSoon' component={ComingSoon} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;

// TODO : 
// Responsive
// Use params 