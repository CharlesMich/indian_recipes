const LOAD_DISHES = "dish/load_dishes"

// all dishes
const load_dishes = payload => ({
type: LOAD_DISHES,
payload
})

export const fetchAllDishes = (params) => async dispatch => {
   
    const response = await fetch(`/api/dish?${params}`)
    console.log((Object.fromEntries(params)))
    if(response.ok){
        const payload = await response.json();
        dispatch(load_dishes(payload))
        return payload
    }
    return response;
}

const initialState = {}

export default function dishReducer(state = initialState, action){
    switch(action.type){
        case LOAD_DISHES:
            const allDishes = {}
            action.payload.forEach(ele => allDishes[ele.id] = ele)
            return allDishes

        default:
            return state    
    }
}