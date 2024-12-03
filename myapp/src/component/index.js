import axios from 'axios';
let currentMode="PROD";
let currentBackendUrl="";
if(currentMode==="PROD"){
    currentBackendUrl="https://nodejs-uqkf.onrender.com//api/v1";
}else if(currentMode==="NONPROD"){
    currentBackendUrl="https://nodejs-uqkf.onrender.com//api/v1";
}else{
    currentBackendUrl="http://localhost:8000/api/v1";
}
 const api=axios.create({
    baseURL:currentBackendUrl,
    withCredentials:true,
 });
 export default api;

