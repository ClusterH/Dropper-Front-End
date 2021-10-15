import React, { Suspense, lazy } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loader from './components/Loader'
import { GlobalStyles } from './styles/globalStyles'
import Web3ReactManager from './components/Web3ReactManager'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Creators = lazy(() => import('./pages/Creators'))
const Collections = lazy(() => import('./pages/Collections'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Web3ReactManager>
        <Router>
          <GlobalStyles />
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/creators" component={Creators} />
          <Route exact path="/collections" component={Collections} />
        </Router>
      </Web3ReactManager>
    </Suspense>
  )
}

export default App
