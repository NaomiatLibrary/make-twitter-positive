import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {RedirecttoLogin} from "./components/RedirecttoLogin"
import {useLocation} from 'react-router-dom';
import { SetTwitterInfos } from './components/SetTwitterInfos';

function App() {
  const[access_token,set_access_token] = useState<string|undefined>(undefined);
  const[access_token_secret,set_access_token_secret] = useState<string|undefined>(undefined);
  const[user_id,set_user_id] = useState<string|undefined>(undefined);
  const[screen_name,set_screen_name] = useState<string|undefined>(undefined);
  const location = useLocation();
  const queryString=location.search;
  const queries:{ [name: string]: string } = queryString.substring(1).split('&').map((p) => p.split('=')).reduce((obj, e) => ({...obj, [e[0]]: e[1]}), {});
  const isAccepted = ("oauth_token" in queries) && ("oauth_verifier" in queries) ;
  if(!isAccepted)return <RedirecttoLogin/>;
  if(isAccepted && !access_token)return <SetTwitterInfos oauth_token={queries.oauth_token} oauth_verifier={queries.oauth_verifier} set_access_token={set_access_token} set_access_token_secret={set_access_token_secret} set_user_id={set_user_id} set_screen_name={set_screen_name}/>
  else return (
    <div className='usaneko_component'>
      Hello {screen_name} ! Your ID is {user_id} .
    </div>
  );
}

export default App;
