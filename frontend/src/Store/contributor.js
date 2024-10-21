import { csrfFetch } from "./csrf";

const LOAD_CONTRIBUTORS = "contributor/load_contributor";
const ADD_CONTRIBUTOR = "contributor/add_contributor";


// all contributors
const load_contributor = payload => ({
    type: LOAD_CONTRIBUTORS,
    payload
})

const add_contributor = payload => ({
    type: ADD_CONTRIBUTOR,
    payload
})

export const fetchContributor = () => async dispatch =>  {
    const response = await fetch('/api/contributor')

    if(response.ok){
        const payload = await response.json();

        dispatch(load_contributor(payload))
        return payload
    }
    return response;
}

export const fetchAddContributor = (contributor) => async dispatch => {
    const {name, title, company, img, website, social, youtube, email } = contributor;

    const response = await csrfFetch('/api/contributor/new', {
        method: "POST",
        body: JSON.stringify({
            name,
            title,
            company,
            img,
            website,
            social,
            youtube,
            email
        }),
    });

    const payload = await response.json();
    dispatch(add_contributor(payload))
    return response
}

const initialState = {}

export default function contributorReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_CONTRIBUTORS:
            const myContributor = {}
            action.payload.forEach(ele => myContributor[ele.id] = ele)
            return {...state, ...myContributor}
        case ADD_CONTRIBUTOR:
            return {...state, [action.payload.id]: action.payload}    

        default:
            return state    
    }
}