import axios from'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL:"http://10.0.2.2:3333"
});

export default api;
