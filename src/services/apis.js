import axios from'axios';
import Config from 'react-native-config';
import * as SecureStore from 'expo-secure-store';
import { BackendAcessError } from '../error/user';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: Config.BACKEND_URL
});

const cepApi = axios.create({
  baseURL:"https://viacep.com.br/ws"
});

api.interceptors.request.use(async (config)=>{
  let token;

  try {
    token = await SecureStore.getItemAsync('userToken');

    
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  } catch (error) {

    console.log("error on initial setup of a request: "+error.constructor.name);
  }
});

api.interceptors.response.use(null,(error)=>{
  if(!error.response){
    throw new BackendAcessError("Sem acesso ao backend")
  }
  return Promise.reject(error);
})

export default api;
export { cepApi, api }
