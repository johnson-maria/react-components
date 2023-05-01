import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Buttons from './Buttons';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';



console.log(React.version);

const headerData = {
  site_name : "my test site name",
  nav : [
      {"link" : "nav1", "text" : "my link1"},
      {"link" : "nav2", "text" : "my link2"},
      {"link" : "nav3", "text" : "my link3"}
  ]
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Welcome data={headerData} />
      <Buttons /> 
      <App />
      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

