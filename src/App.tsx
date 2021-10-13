import React, { Suspense, lazy } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loader from './components/Loader'
import { GlobalStyles } from './styles/globalStyles'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Creators = lazy(() => import('./pages/Creators'))
// const BankVaults = lazy(() => import('./pages/BankVaults'));
// const Plains = lazy(() => import('./pages/Plains'));
// const Marketplace = lazy(() => import('./pages/Marketplace'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <GlobalStyles />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/creators" component={Creators} />
      </Router>
    </Suspense>
  )
}

export default App
