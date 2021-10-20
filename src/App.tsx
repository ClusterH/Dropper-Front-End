import React, { Suspense, lazy } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './components/Loader'
import { GlobalStyles } from './styles/globalStyles'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Creators = lazy(() => import('./pages/Creators'))
const Collections = lazy(() => import('./pages/Collections'))
const Account = lazy(() => import('./pages/Account'))
const Item = lazy(() => import('./pages/Item'))

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/creators" component={Creators} />
          <Route exact path="/clix" component={Collections} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/item/" component={Item} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
