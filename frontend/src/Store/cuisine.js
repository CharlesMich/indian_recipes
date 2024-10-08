const LOAD_CUISINES = "cuisine/load_cuisines"

// all states
const load_cuisines = payload => ({
type: LOAD_CUISINES,
payload
})

export const fetchAllCuisines = () => async dispatch => {
    const response = await fetch('/api/cuisine')
   
    if(response.ok){
        const payload = await response.json();
       
        dispatch(load_cuisines(payload))
        return payload
    }
    return response;
}

const initialState = {}

export default function cuisineReducer(state = initialState, action){
    switch(action.type){
        case LOAD_CUISINES:
            const allCuisines = {}
            action.payload.forEach(ele => allCuisines[ele.id] = ele)
            return {...state, ...allCuisines}

        default:
            return state    
    }
}