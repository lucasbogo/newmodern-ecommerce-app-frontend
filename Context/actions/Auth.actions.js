import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from "native-base";
import baseURL from "../../assets/common/baseURL";


/**
 * o setItem("nome") poderá ser acessada e utilizada em toda a aplicação; o nome pode ser qualquer coisa,
 * para simplificar o entendimento, escolhemos jwt (jasonWebToken)
 * 
 * o seja, armazena-se o token no memória do aparelho do usuário e evita reautenticação de forma constante
 */

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`${baseURL}users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                const token = data.token;
                AsyncStorage.setItem("jwt", token)
                const decoded = jwt_decode(token)
                dispatch(setCurrentUser(decoded, user)) //todo
            } else {
                logoutUser(dispatch)
            }
        })
        // Mensagem de erro com toast
        .catch((err) => {
            Toast.show({
                topOffSet: 60,
                type: "error",
                text1: "Não encontramos essa credencial em nosso Banco de Dados",
                text2: "verifique suas credenciais e tente novamente"
            })
            logoutUser(dispatch)
        })
}

// Get method para pegar o perfil usuário
export const getUserProfile = (id) => {
    fetch(`${baseURL}users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

// Método logout
export const logoutUser = (dispatch) => {
    // Para fazer logout, remove-se o item armazenado em AsyncStorage
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({})) // redireciona o usuário...
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}