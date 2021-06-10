import { Switch, Route, Redirect } from 'react-router-dom'
import Balance from './Pages/Balance';
import Home from './Pages/Home';
import Junk from './Pages/Junk';

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
