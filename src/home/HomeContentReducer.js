import MainPageTypes from './MainPageTypes';

const initialState = null;

export default function HomeContentReducer(state = initialState, action) {
    switch(action.type){
        case MainPageTypes.MAIN_PAGE_CONTENT_RECEIVED:
            return action.content;
        default:
            return state;
    }
}