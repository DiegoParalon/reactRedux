import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'Estudar react'
    ]
}

//REDUCER

function todo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

            case 'REMOVE_TASK':
                const newData = state.data.filter(task => task !== action.payload)
                return {
                    ...state,
                    data: newData
                }

        default:
            return state
    }

}
const store = createStore(todo)
export default store