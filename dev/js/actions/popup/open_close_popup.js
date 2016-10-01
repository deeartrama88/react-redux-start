export const close_popup = (data) => {
    return {
        type: 'CLOSE_POPUP',
        payload: data
    }
}
export const open_popup = (data) => {
    return {
        type: 'OPEN_POPUP',
        payload: data
    }
}
