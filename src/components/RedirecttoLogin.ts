import React, { useState } from 'react';
import axios from "axios";
export const RedirecttoLogin = () =>{
    axios.get('https://liyrpmqvlf.execute-api.ap-northeast-1.amazonaws.com/Prod/hello/')
  .then(response=>{
    const data=JSON.parse(response.data)
    document.location = data.url;
  })
};