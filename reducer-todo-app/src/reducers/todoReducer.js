export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        //Add functionality to add/reate a new 'todo'
        case 'ADD_TODO':
            return[
                ...state,
                    {
                    item: '',
                    completed: false,
                    id: Date.now()
                    }
                ]


        //Add functionality to Toggle completed field
        case 'COMPLETED_TODO':
            return{
                ...state
            }


        //Clear completed todos
        case 'CLEAR_COMPLETED_TODO':
            return{
                ...state
            }



        default:
        return state;
    }

}