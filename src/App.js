import './App.css'

import { createHashHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Router from './router'
import Offer1Theme from './config/theme'
import 'bootstrap/dist/css/bootstrap.min.css'
// mocking api
import './services/axios/mockApi'
// for notifications
import { SnackbarProvider } from 'notistack'
import sagas from './redux/sagas'

// middlewards
export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]

const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <Offer1Theme>
          <Router history={history} />
        </Offer1Theme>
      </Provider>
    </SnackbarProvider>
  )
}

export default App
