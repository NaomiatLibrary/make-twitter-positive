import React, { useState } from 'react';
import axios from "axios";
export const SetTwitterInfos:React.FC<{
  oauth_token:string,
  oauth_verifier:string,
  set_access_token:React.Dispatch<React.SetStateAction<string|undefined>>,
  set_access_token_secret:React.Dispatch<React.SetStateAction<string|undefined>>,
  set_user_id:React.Dispatch<React.SetStateAction<string|undefined>>,
  set_screen_name:React.Dispatch<React.SetStateAction<string|undefined>>}> = (props) =>{
  axios.get('https://t2zuzepsh3.execute-api.ap-northeast-1.amazonaws.com/Prod/twitter_oauth?oauth_verifier='+props.oauth_verifier+'&oauth_token='+props.oauth_token)
  .then(response=>{
    console.log(response)
    props.set_access_token(response.data.access_token);
    props.set_access_token_secret(response.data.access_token_secret);
    props.set_user_id(response.data.user_id);
    props.set_screen_name(response.data.screen_name);
  }).catch(e=> {
    console.log(e)
    return <p>Twitter Authentication Error!</p>;
  })  
  return <p>Loading...</p>;
};