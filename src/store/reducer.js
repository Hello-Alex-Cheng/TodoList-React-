
const defaultState = {
    inputValue : '',
    list : [
    ]
};
const reducer = ( state = defaultState , action ) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'change_input_value':
            newState.inputValue = action.value;
            return newState; 
        case 'add_list_item':
            newState.list.push(state.inputValue);
            newState.inputValue = '';
            return newState;
        case 'delete_list_item':
            newState.list.splice(action.index,1); /* 删除 list 下标为index 的 item */
            return newState;
        case 'init_list_data':
            newState.list = [...newState.list,...action.value]; /* 删除 list 下标为index 的 item */
            return newState;
        default : 
            return state;
    }
};

export default reducer;