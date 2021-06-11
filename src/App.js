import { Switch, Route, Redirect } from 'react-router-dom'
import Account from './Pages/Account';
import ComingSoon from './Pages/ComingSoon';
import Home from './Pages/Home';
import Transfert from './Pages/Transfert';

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
