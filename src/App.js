// import logo from './logo.svg';
// import './App.css';
import {Route, Switch} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import "bootstrap"

// import faStyles from 'font-awesome/css/font-awesome.css'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
