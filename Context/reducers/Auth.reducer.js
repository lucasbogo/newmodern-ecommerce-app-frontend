import { SET_CURRENT_USER } from "../actions/Auth.actions";
import empty from "../../assets/common/empty";

export default function (state, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !empty(action.payload), // se o campo não estive vazio, verifica-se o estado como autenticado 
                user: action.payload,
                userProfile: action.userProfile
            };
        default:
            return state;

    }

}