import axios from'axios';



const api = axios.create({
    baseURL:"http://localhost:3307"
});

export default api;
