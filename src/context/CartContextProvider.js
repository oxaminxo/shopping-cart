import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}

const sumItem = (state) => {
    const itemCounter = state.reduce((total, item) => total + item.quantity, 0);
    const total = state.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    return {itemCounter, total};
}

const cartReducer = (state, action) => {
    console.log(state);

    switch(action.type) {
        case 'ADD_ITEM': 
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state, 
                selectedItems: [...state.selectedItems],
                ...sumItem(state.selectedItems)
            }

        case 'REMOVE_ITEM': 
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItem(state.selectedItems)
            }

        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItem(state.selectedItems)
            }   
        
        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItem(state.selectedItems)
            }
        
        case 'CHECKOUT': 
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }

        case 'CLEAR':
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }    
        
        default:     
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;