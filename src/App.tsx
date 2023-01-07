import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {RedirecttoLogin} from "./components/RedirecttoLogin.ts"
import {
  useLocation,
  useParams
} from 'react-router-dom';

function App() {
  const[access_token,set_access_token] = useState(undefined);
  const[access_token_secret,set_access_token_secret] = useState(undefined);
  const[user_id,set_user_id] = useState(undefined);
  const[screen_name,set_screen_name] = useState(undefined);
  const location = useLocation();
  const queryString=location.search;
  const queries = queryString.substring(1).split('&').map((p) => p.split('=')).reduce((obj, e) => ({...obj, [e[0]]: e[1]}), {});
  const islogined = ("oauth_token" in queries) && ("oauth_verifier" in queries) ;
  return islogined ? 
  (
    <div className='usaneko_component'>
      <>
      oauth_token={queries.oauth_token}<br/>
      oauth_verifier={queries.oauth_verifier}<br/>
      </>
    </div>
  ):<RedirecttoLogin/>;
}

export default App;
