import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Feed } from './Feed';
import { NavigationBar } from './components/NavigationBar';
import { NavigationBar2 } from './components/NavigationBar2';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser, auth} from 'reactfire';

//<NavigationBar/>


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Feed" component={Feed} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;