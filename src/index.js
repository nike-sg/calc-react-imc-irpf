import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill/proxy.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PersonContextProvider from './contexts/PersonContextProvider';
import IrpfContextProvider from './contexts/IrpfContextProvider';

import reportWebVitals from './reportWebVitals';

import './index.css';

function render() {
  const ImcApp = lazy(() => import('./apps/ImcApp'));
  const OtherApp = lazy(() => import('./apps/OtherApp'));

  ReactDOM.render(
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/imc">IMC App</Link>
          </li>
          <li>
            <Link to="/other">IRPF App</Link>
          </li>
        </ul>
      </div>
      <br />
      <Switch>
        <Route path="/imc">
          <Suspense fallback={<span>loading imc app...</span>}>
            <PersonContextProvider>
              <ImcApp />
            </PersonContextProvider>
          </Suspense>
        </Route>
        <Route path="/other">
          <Suspense fallback={<span>loading other app...</span>}>
            <IrpfContextProvider>
              <OtherApp />
            </IrpfContextProvider>
          </Suspense>
        </Route>
      </Switch>
    </Router>
    ,
    document.getElementById('root')
  );
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
