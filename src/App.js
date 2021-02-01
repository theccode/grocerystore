import React, {Component, lazy, Suspense } from 'react';
import { GroceryStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
// import { Admin } from './admin/Admin';
import { AuthProviderImpl } from './auth/AuthProviderImpl';

const Admin = lazy(() => import("./admin/Admin"));

export default class App extends Component {
  render() {
    return <Provider store={GroceryStoreDataStore}>
      <AuthProviderImpl>
        <Router>
            <Suspense fallback={ <h3>Loading...</h3> }>
              <Switch>
                <Route path="/shop" component={ShopConnector}/>
                <Route path="/admin"  render={
                  routeProps => 
                    <Admin { ...routeProps } />
                  }
                  />
                <Redirect to="/shop"/>
              </Switch>
            </Suspense>
        </Router>
      </AuthProviderImpl>
    </Provider>
  }
}
