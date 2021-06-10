import { Switch, Route, Redirect } from 'react-router-dom'
import Dapp from './pages/Dapp';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/dapp' component={Dapp} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
