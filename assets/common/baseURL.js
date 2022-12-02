import { Platform } from "react-native";

// Deployed to Heroku 
let baseURL = 'https://newmodern-server.herokuapp.com/api/v1/'

// Armazenar a URL em uma String vazia
// let baseURL = '';


// Verificar qual plataforma está sendo utilizada.
// {
//     Platform.OS == 'android'
//         ? baseURL = "https://0afa-2801-82-4009-5-ba3a-e6cb-edb4-bed5.sa.ngrok.io/api/v1/"
//         : baseURL = "http://localhost:3000/api/v1/"
// }

export default baseURL;