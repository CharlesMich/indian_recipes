const LOAD_STATES = "state/load_states"

// all states
const load_states = payload => ({
type: LOAD_STATES,
payload
})

export const fetchAllStates = () => async dispatch => {
    const response = await fetch('/api/state')
   
    if(response.ok){
        const payload = await response.json();
       
        dispatch(load_states(payload))
        return payload
    }
    return response;
}

const initialState = {}

export default function stateReducer(state = initialState, action){
    switch(action.type){
        case LOAD_STATES:
            const allStates = {}
            action.payload.forEach(ele => allStates[ele.id] = ele)
            return {...state, ...allStates}

        default:
            return state    
    }
}