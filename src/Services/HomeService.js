import HomeAdapter from '../adapters/HomeAdapter';
import Content from "../mockedData/Content";

export default {
    getContent(id) {
        return new Promise(resolve => {
            setTimeout(resolve(HomeAdapter.createContent(Content(id))), 1000);
        });
    }
}