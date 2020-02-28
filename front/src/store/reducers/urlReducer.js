import {GOT_SHORT_LINK, ON_LINK_CHANGE} from "../actions/urlActions";

const initialState = {
    shortLink: '',
    myLink: ''
};

const urlReducer = (state = initialState, action) => {
    switch (action.type){
        case ON_LINK_CHANGE:
            return {
                ...state,
                myLink: action.link
            };
        case GOT_SHORT_LINK:
            return {
                ...state,
                shortLink: action.shortLink
            };
        default:
            return state;
    }
};

export default urlReducer;
