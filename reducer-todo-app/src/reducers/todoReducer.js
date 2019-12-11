//set up initialState with an array of objects
export const initialState = [
    {
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

// initialState gets passed in to 'state' --> action updates our 'case'
export const reducer = (state, action) => {
    switch(action.type) {
        //Add functionality to add/reate a new 'todo'
        case 'ADD_TODO':
            return[
                ...state,
                    {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                    }
                ]


        //Add functionality to Toggle completed field
        case 'COMPLETED_TODO':
            return state.map((item) => {
                return item.id === action.payload ?
                {...item, 
                completed: !item.completed} :
                item
            })


        //Clear completed todos
        case 'CLEAR_COMPLETED_TODO':
            return{
                ...state,
                
            }



        default:
        return state;
    }

}