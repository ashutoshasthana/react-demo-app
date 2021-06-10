import { Constant } from './appConstants';
import axios from 'axios';

export const signUp = async (body) => {
  
    // return fetch({
    //   method: 'POST',
    //   url: `${Constant.BASE_URL}/sign-up`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
  };
  
  
  export const signIn = (body) => {
    return axios.post(`${Constant.BASE_URL}/login`,body);    
  };