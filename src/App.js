import { Switch, Route, Redirect } from 'react-router-dom'
import Balance from './pages/Balance';
import Home from './pages/Home';
import Junk from './pages/Junk';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Balance' component={Balance} />
      <Route exact path='/junk' component={Junk} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
