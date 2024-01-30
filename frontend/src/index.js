import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {AthletesContextProvider} from './context/AthletesContext'
import { EventsContextProvider } from './context/EventsContext';
import { ProductsContextProvider } from './context/ProductsContext';
import { BlogsContextProvider } from './context/BlogsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
       <AthletesContextProvider>
         <EventsContextProvider>
            <BlogsContextProvider>
    <App />
            </BlogsContextProvider>
          </EventsContextProvider>
       </AthletesContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
