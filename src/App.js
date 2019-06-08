import React,{Component} from 'react';
// import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './Context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Demo from './components/pages/Demo';
import Test from './components/Test/Test';
import EditContact from './components/contacts/EditContact';

class App extends Component{
  
  render(){
    return (
      <Provider>
          <Router>
          <div className="App">
            <Header pageTitle="React demo"/>
            
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route  path="/contacts/add" component={AddContact} />
                <Route  path="/about" component={About} />
                <Route path="/demo" component={Demo} />
                <Route path="/test" component={Test} />
                <Route path="/contact/:id/edit" component={EditContact} />
                <Route component={NotFound}/>
              </Switch>
              {/* <Contact name="samyak" email="tualadhar.samyak@yahoo.com"/>
              <Contact name="manisha" email="manisha@yahoo.com"/> */}
            </div>
          </div>

          </Router>
      </Provider>
    );
  }
}

export default App;