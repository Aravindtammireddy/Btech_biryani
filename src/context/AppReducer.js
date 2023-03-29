export default (state, action) => {
    switch(action.type) {
        case 'GET_ORDERS':
            console.log(`payload` , action.payload)
            return {
                ...state,
               orders : action.payload
            }
        case 'DELETE_ORDER':
            return {
                ...state,
                orders : state.orders.filter(orders => orders._id  !== action.payload)
            }
            case 'ADD_ORDER':
                return {
                    ...state,
                    orders : [...state.orders,action.payload]
                }
        default:
            return state;
    }
};
