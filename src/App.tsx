import './App.css'
import { Provider } from 'react-redux'
import store from './infrastructure/store/store'
import Articles from './pages/article/Articles'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models'
import { Login } from './pages/login'
import RoutesWithNotFounds from './utility/route/RouteWhitNotFounds.utility'


function App() {

  return (
    //fallback es donde pondriamos el spinner momentaniamente le pondremos solo la palabra loading
    <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesWithNotFounds>
            <Route path={PublicRoutes.HOME} element={<>Home</>} />
            <Route path={PublicRoutes.ARTICLES} element={<Articles />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
          </RoutesWithNotFounds>
        </BrowserRouter>
      </Provider>
    </Suspense >
  )
}

export default App
