import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,ADD_TO_COMPARE, REMOVE_FROM_COMPARE, CLEAR_COMPARE  } from '../Reducers/Constants';

/**
 * 
 * @param {*} payload 
 * 
 * Actions são os métodos que irão despachar (dispatch) o payload ao nosso Reducer.
 * 
 * Serve para para possibilitar o armazenamento em Store e permitir que a gente acesse o aplicativo.
 * 
 * @returns 
 */

// Esse método vem do /Reducers/CartItem.js e faz a manipulação do Estado do objeto
export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

// Como iremos remover um item do carrinho, precisamos chamar o payload para 
// identificar a existencia do objetoProduto par depois remover
export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

// Não é ncessário payload (identifcar existencia objeto) pois simplesmente destrói o carrinho | asvazia completamente
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const addToCompare = (payload) => {
    return {
        type: ADD_TO_COMPARE,
        payload
    }
}

// identificar a existencia do objetoProduto par depois remover
export const removeFromCompare = (payload) => {
    return {
        type: REMOVE_FROM_COMPARE,
        payload
    }
}

// Não é ncessário payload (identifcar existencia objeto) pois simplesmente destrói o carrinho | asvazia completamente
export const clearCompare = () => {
    return {
        type: CLEAR_COMPARE
    }
}