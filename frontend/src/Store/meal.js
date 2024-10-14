const LOAD_MEALS = "meal/load_meals"

// all dishes
const load_meals = payload => ({
type: LOAD_MEALS,
payload
})

export const fetchAllMeals = () => async dispatch => {
    const response = await fetch(`/api/meal`)
   
    if(response.ok){
        const payload = await response.json();
        dispatch(load_meals(payload))
        return payload
    }
    return response;
}

const initialState = {}

export default function mealReducer(state = initialState, action){
    switch(action.type){
        case LOAD_MEALS:
            const allMeals = {}
            action.payload.forEach(ele => allMeals[ele.id] = ele)
            return {...state, ...allMeals}

        default:
            return state    
    }
}