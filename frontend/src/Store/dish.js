import { csrfFetch } from "./csrf";

const LOAD_DISHES = "dish/load_dishes"
const ADD_DISH = "dish/add_dish"

// all dishes
const load_dishes = payload => ({
type: LOAD_DISHES,
payload
})

const add_dish = payload => ({
    type: ADD_DISH,
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

export const fetchAddDish = (formData) => async dispatch => {
    const response = await csrfFetch('/api/dish/new', {
        method: 'POST',
        body: formData
    })
    if (response.ok) {
        const payload = await response.json();
        dispatch(add_dish(payload))
        return response
    }
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