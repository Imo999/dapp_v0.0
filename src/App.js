import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
