import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import Loader from './components/Loader'
import { GlobalStyles, ToastWrapper } from './styles/globalStyles'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
// const Creators = lazy(() => import('./pages/Creators'))
const Collections = lazy(() => import('./pages/Collections'))
const Inventory = lazy(() => import('./pages/Inventory'))
const Packs = lazy(() => import('./pages/Packs'))
// const Ranks = lazy(() => import('./pages/Ranks'))

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <ToastWrapper
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/clix" component={Collections} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/packs" component={Packs} />
          {/* <Route exact path="/ranks" component={Ranks} /> */}
          <Route exact path="/:id" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
