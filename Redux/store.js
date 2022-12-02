import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// Importar CartItem | CompareItem
import cartItem from './Reducers/CartItem';
import compareItem from './Reducers/CompareItem';

// Variável reducers
const reducers = combineReducers({
    // Método cartiItem atribuído à cartItem 
    cartItem: cartItem,
    // Método compareItem atribuído à compareItem 
    compareItem: compareItem
})

// Criar o store
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;