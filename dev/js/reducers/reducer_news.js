let initState = [
    {
        id: 3,
        title: "Madi likes her dog but it is really annoying",
        date: new Date().toDateString()
    },
    {
        id: 4,
        title: "Madi  annoying",
        date: new Date().toDateString()
    },
];
export default function (state = initState, action) {
    switch (action.type){
        case "ADD_NEW":
            return state.concat(action.payload);
        case "GET_USER":
            console.log(action.payload);
            return state.concat(action.payload);
        case "REMOVE_NEWS":
            return state.filter(function (i) {
                return i != action.payload
            })
        case "CLEAR_LIST":
            return []
        default:
            return state;
    }
}