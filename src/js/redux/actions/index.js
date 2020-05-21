import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

export function getData() {
	return function(dispatch) {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((payload) => {
				dispatch({ type: DATA_LOADED, payload });
			});
	};
}
