const LOAD_INGREDIENTS = "ingredients/load_ingredients"

// all ingredients
const load_ingredients = payload => ({
    type: LOAD_INGREDIENTS,
    payload
})

export const fetchAllIngredients = (type) => async dispatch => {

    console.log(type)
    const response = await fetch(`/api/ingredients?type=${type}`)

    if (response.ok) {
        const payload = await response.json()

        dispatch(load_ingredients(payload))
    }
    return response

}

const initialState = {}

export default function ingredientReducer(state= initialState, action) {
    switch(action.type) {
        case LOAD_INGREDIENTS: 
        const allIngredients = {}
        action.payload.forEach(ele => allIngredients[ele.id] = ele)
        return {...allIngredients}

        default:
            return state
    }
}