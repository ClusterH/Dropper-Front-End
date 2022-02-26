import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import Loader from './components/Loader'
import { useInitBiconomy } from './hooks/useBiconomy'
import { GlobalStyles, ToastWrapper } from './styles/globalStyles'
import { DAppProviders } from './UseDappProvider'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Login = lazy(() => import('./pages/Login'))
// const Creators = lazy(() => import('./pages/Creators'))
const Collections = lazy(() => import('./pages/Collections'))
const Inventory = lazy(() => import('./pages/Inventory'))
const Packs = lazy(() => import('./pages/Packs'))
const Ranks = lazy(() => import('./pages/Ranks'))
const MarketPlace = lazy(() => import('./pages/Marketplace'))
const UpcomingDropers = lazy(() => import('./pages/UpcomingDrops'))
const HowToBuy = lazy(() => import('./pages/HowToBuy'))
const LaunchPad = lazy(() => import('./pages/LaunchPad'))
const LaunchForm = lazy(() => import('./pages/LaunchPad/LaunchForm'))
const Footer = lazy(() => import('./components/Footer'))

const App: React.FC = () => {
  useInitBiconomy()

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
        <DAppProviders>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/clix" component={Collections} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/packs" component={Packs} />
            <Route exact path="/ranks" component={Ranks} />
            <Route exact path="/marketplace" component={MarketPlace} />
            <Route exact path="/upcoming" component={UpcomingDropers} />
            <Route exact path="/howtobuy" component={HowToBuy} />
            <Route exact path="/launchpad" component={LaunchPad} />
            <Route exact path="/launch_form" component={LaunchForm} />
            <Route exact path="/:id" component={Home} />
          </Switch>
          <Footer />
        </DAppProviders>
      </Suspense>
    </Router>
  )
}

export default App
