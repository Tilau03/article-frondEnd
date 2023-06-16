import axios from "axios";

//en vite es asi
const BASE_URL = import.meta.env.VITE_APP_API_URL_BASE;

//le decimes a axios que utilice como base para todas las url esa ruta
//asi la proxima ves que lo necesites solo tienes que poner por ejemplo /article
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

//recibe dos callbacks
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => error
);

//exportamos la instancia que utilizaremos siempre
//porque si no tendriamos que usar axios directamente ejemplo axios.get("toda la url")

export default axiosInstance;
