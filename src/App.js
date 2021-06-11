import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import Account from './Pages/Account';
import Transfert from './Pages/Transfert';
import ComingSoon from './Pages/ComingSoon';

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
