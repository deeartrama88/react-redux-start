export const decrementCounter = (count) => {
    return {
        type: 'DECREMENT_COUNTER',
        payload: count
    }
}
