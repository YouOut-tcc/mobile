import axios from'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL:"http://192.168.100.23:3333"
});

export default api;
