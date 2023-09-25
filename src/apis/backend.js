import axios from'axios';
import Config from 'react-native-config';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: Config.BACKEND_URL
});

export default api;
