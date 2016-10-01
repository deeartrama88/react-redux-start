import axios from 'axios';

export const addNew = (news) => {
    return {
        type: 'ADD_NEW',
        payload: news
    }
}

export function removeNews(id) {
    return {
        type: 'REMOVE_NEWS',
        payload: id
    }
}

export function clearList() {
    return {
        type: 'CLEAR_LIST'
    }
}

export function getUser() {
    return function (dispatch) {
        axios.get('http://rest.learncode.academy/api/test123/tweets')
        .then((responce) => {
               dispatch({type: "GET_USER", payload: responce.data})
        })
    }
}