import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import {store} from "./redux/store/store";

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
                  <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,

);



reportWebVitals();
