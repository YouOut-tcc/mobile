import api from './apis';
import {AxiosError} from 'axios';
import * as SecureStore from 'expo-secure-store';
import { BackendAcessError, LoginError } from '../error/user';

async function getUserToken(token) {
  try {
    let res = await api.post("/usuario/token", null, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })

    return res;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
      throw new Error(error.response.data.message)
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } if (error instanceof BackendAcessError){
      throw error;
    }
  }
}

async function userLogin(data) {
  try {
    const res = await api.post("/usuario/login", data);

    return res.data.token;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
      throw new LoginError(error.response.data.message)
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else if(error instanceof BackendAcessError){
      throw error
    }
  }
}

export { getUserToken as getToken, userLogin }