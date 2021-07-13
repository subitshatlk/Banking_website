import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/webpages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCustomers from './components/webpages/AllCustomers';
import CreateUser from './components/webpages/CreateUser';
import Transfer from './components/webpages/Transfer';
import Transactions from './components/webpages/Transactions';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/allOurCustomers' component={AllCustomers} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </>
  );
}

export default App;