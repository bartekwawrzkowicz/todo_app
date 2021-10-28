const initialState = [
    { id: 1, text: 'Let\'s' },
    { id: 2, text: 'start' },
    { id: 3, text: 'mobile coding' },
    { id: 4, text: 'with React Native' },
    { id: 5, text: 'by' },
    { id: 6, text: 'codeodrive' },
];

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const addItemState = [...state];

            addItemState.push({
                id: Number(Math.random() + ''),
                text: action.payload.text
            });
            return addItemState

        case 'DELETE_ITEM':
            const deleteItemState = [...state];
            const deleteIndex = 0;

            deleteItemState.forEach((item, itemIndex) => {
                if (item.id !== action.payload.id) {
                    return;
                }
                deleteIndex = itemIndex;
                return false;
            });
            deleteItemState.splice(deleteIndex, 1);
            return deleteItemState;

        default:
            return state;
    }
}

export default todoList;