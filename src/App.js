import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home.js';
import Account from './Pages/Account.js';
import Transfert from './Pages/Transfert.js';
import ComingSoon from './Pages/ComingSoon.js';

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
