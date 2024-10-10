const LOAD_RECIPES = "recipe/load_recipe"

// all states
const load_recipes = payload => ({
type: LOAD_RECIPES,
payload
})

export const fetchRecipe = () => async dispatch => {
    const response = await fetch('/api/recipe')
   
    if(response.ok){
        const payload = await response.json();
       
        dispatch(load_recipes(payload))
        return payload
    }
    return response;
}

const initialState = {}

export default function recipeReducer(state = initialState, action){
    switch(action.type){
        case LOAD_RECIPES:
            const myRecipe = {}
            action.payload.forEach(ele => myRecipe[ele.id] = ele)
            return {...state, ...myRecipe}

        default:
            return state    
    }
}