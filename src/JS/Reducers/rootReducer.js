import { ActionTypes } from "../Constants/action-types";
const initialState = {
    errorMessage:"",
    loading: false,
    tasks: [
        {
            id: 1,
            description: "Do my checkpoint",
             isDone: true
        },
        {
            id: 2,
            
            description: "Read book",
             isDone: false
        },
        {
            id: 3,
            
            description: "footing",
             isDone: true
        },
        {
            id: 4,
            
            description: "shooping",
             isDone: false
        }
    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TASK:
            return {
                ...state,
                tasks: action.payload,
                loading:false
            }
        case ActionTypes.ADD_TASK:
           
            return {
                ...state,
                loading:false,
                
                tasks: [...state.tasks, action.payload]
            }
        case ActionTypes.EDIT_SELECTED_TASK:
            const array1= state.tasks
            const objIndex = state.tasks.findIndex((obj => obj.id == action.payload.id));
            
            array1[objIndex].description = action.payload.description
            console.log(array1)
            return {
                ...state,
                tasks: array1
            }
        case ActionTypes.REMOVE_SELECTED_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task)=> task.id !== action.payload.id),
                loading:false
            }
        default:
            return state
    }
}

export default rootReducer