import React, { useReducer, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from "../reducers/Auth.reducer";
import { setCurrentUser } from "../actions/Auth.actions";
import AuthGlobal from "./AuthGlobal";

const Auth = props => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null, //chave usuario autentica reducer hook inicial = nulo
        user: {} // chave usuário como objeto vazio reducer hook incial
    });
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
        if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            // Se o set ShowChild é true
            if (setShowChild) {
                dispatch(setCurrentUser(jwt_decode(decoded)))
            }
        }
        // Limpar para evitar vazamento de meméria
        return () => setShowChild(false);
        // Passar array vazio
    }, [])

    // Se não existe, retorna nulo
    if (!showChild) {
        return null;
    // Caso contrário, retorna Autenticação global
    } else {
        return (
            <AuthGlobal.Provider
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {/* Depois o stateChildren é renderizado */}
                {props.children}
            </AuthGlobal.Provider>
        )

    }
}

export default Auth;