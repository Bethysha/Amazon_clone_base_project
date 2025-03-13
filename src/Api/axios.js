import axios from "axios"



const axiosInstance = axios.create({
  // local instance of forebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2025-b3242/us-central1/api",
  //  deploy version of firebase function
  baseURL: "https://us-central1-clone-2025-b3242.cloudfunctions.net/api",

  // deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-fq6s.onrender.com/",
});

export {axiosInstance};