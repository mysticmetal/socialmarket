import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './testing/reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
