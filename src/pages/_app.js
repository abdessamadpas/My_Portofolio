import Home from '../app/Home';
import { store } from '../../store'
import { Provider } from 'react-redux'
import '../app/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Home/>
      </Provider>
  );
}

