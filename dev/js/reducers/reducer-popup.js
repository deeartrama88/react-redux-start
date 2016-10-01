export default function (state = false, action){
    switch(action.type) {
        case "CLOSE_POPUP":
            return false;
        case "OPEN_POPUP":
            return true;
        default:
            return state;
    }
}

