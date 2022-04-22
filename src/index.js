import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import firebase from "firebase/compat/app";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={"1l30t69hkd"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>
);
