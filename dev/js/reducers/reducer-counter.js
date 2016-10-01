export default function (state = 0, action){
    switch(action.type) {
        case "INCREMENT_COUNTER":
            return state + 1;
        case "DECREMENT_COUNTER":
            return state - 1;
        case "RESET_COUNTER":
            return state = action.payload;
        default:
            return state;
    }
}
