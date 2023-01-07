import React, { useState } from 'react';
import axios from "axios";
export const RedirecttoLogin = () =>{
  axios.get(' https://t2zuzepsh3.execute-api.ap-northeast-1.amazonaws.com/Prod/hello/')
  .then(response=>{
    console.log(response)
    document.location = response.data.url;
  })
  return <p>Loading for Twitter Login...</p>;
};