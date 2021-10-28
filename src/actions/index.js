export const addNewItem = text => {
    return {
        type: 'ADD_ITEM',
        payload: { text },
    }
}

export const deleteItem = id => {
    return {
        type: 'DELETE_ITEM',
        payload: { id },
    }
}