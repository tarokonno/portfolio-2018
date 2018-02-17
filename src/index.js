import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
  	<ScrollToTop>
    	<App />
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));

unregister();
