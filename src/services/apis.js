import axios from'axios';
import Config from 'react-native-config';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: Config.BACKEND_URL
});

const cepApi = axios.create({
  baseURL:"https://viacep.com.br/ws"
});

export default api;
export { cepApi, api }
