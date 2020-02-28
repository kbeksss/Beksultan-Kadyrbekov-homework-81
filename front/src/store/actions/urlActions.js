import axios from 'axios';

export const ON_LINK_CHANGE = 'ON_LINK_CHANGE';
export const GOT_SHORT_LINK = 'GOT_SHORT_LINK';

const onLinkChange = link => ({type: ON_LINK_CHANGE, link});
const gotShortLink = shortLink => ({type: GOT_SHORT_LINK, shortLink});

export const linkChange = link => {
    return dispatch => {
        dispatch(onLinkChange(link))
    }
};

export const getShortLink = link => {
    return async dispatch => {
        try{
            let response = await axios.post('http://localhost:8000/links', link);
            dispatch(gotShortLink(response.data));
        } catch(e){
            console.error(e);
        }
    }
};
