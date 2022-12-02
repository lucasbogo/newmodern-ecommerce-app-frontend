import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './Constants'

// ItemCarrinho com estado inicial nulo
const cartItems = (state = [], action) => {
    switch (action.type) {
        // Se adicionar itemCarrinho...
        case ADD_TO_CART:
            //Verifica se existe items existentes no carrinho (...state)
            return [...state, action.payload]
        // Se decrementar itemCarrinho
        case REMOVE_FROM_CART:
            // passa-se um filtro pelo o state verificaando se existe item, se existir, remove item.
            return state.filter(cartItem => cartItem !== action.payload)
        // Se excluir todos os itens carrinho
        case CLEAR_CART:
            // Retorna State vazio... Esvazia o carrinho e o Estate volta para Vazio
            return state = []
    }
    return state;
}

export default cartItems;