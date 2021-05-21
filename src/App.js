// import logo from './logo.svg';
// import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
