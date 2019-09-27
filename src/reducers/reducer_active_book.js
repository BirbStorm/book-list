export default function(state=null, action) {
    switch(action.type){
        case 'BOOK_SELECTED': 
            switch(action.type){
                case 'BOOK_2':
                    return action.payload;
            default:
                return state
            }
        default:
            return state;
    }
}