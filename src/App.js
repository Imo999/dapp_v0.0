import { Switch, Route, Redirect } from 'react-router-dom'
import Balance from './Pages/Balance';
import ComingSoon from './Pages/ComingSoon';
import Home from './Pages/Home';
import Transfert from './Pages/Transfert';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Balance' component={Balance} />
      <Route exact path='/Transfer' component={Transfert} />
      <Route exact path='/ComingSoon' component={ComingSoon} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
