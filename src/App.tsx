import './App.css'
import {Provider} from 'react-redux'
import store from './infrastructure/store/store'
import Articles from './pages/Articles'

function App() {

  return (
    <Provider store={store}>
      {/*Imagina que estamos en la pagia de articulos*/}
      <Articles/>
    </Provider>
  )
}

export default App
