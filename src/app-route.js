import React from "react";
import {
  Router,
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import  LoginConponent  from  './component/LoginComponent';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      exact
      render={(props) => {
        return localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect  {...props}  to="/login" />
        );
      }}
    />
  );
};



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div>
        {/*routes for the components*/} 
        <Switch>
          <Route path="/login" render={(routeProps) => <LoginConponent {...routeProps}/>} exact/>         
          {/* <ProtectedRoute path="/mydashboard" component={Dashboard} />      
          <ProtectedRoute  path="/insid/dashboard" component={Dashboard} />  
          <ProtectedRoute  path="/admin" component={Dashboard} />               */}
          <Route path="/" render={(routeProps) => <LoginConponent {...routeProps}/>} exact/>
          <Route path="**" render={(routeProps) => <><h1>404 Not Found</h1></>} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}