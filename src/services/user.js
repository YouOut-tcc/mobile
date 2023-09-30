import api from './apis';
import {AxiosError} from 'axios';
import * as SecureStore from 'expo-secure-store';

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
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function userLogin(data) {
  try {
    const res = await api.post("/usuario/login", data);

    return res.data.token;
  } catch (error) {
    console.log(error.constructor.name);
    console.log("aqui");
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

export { getUserToken as getToken, userLogin }