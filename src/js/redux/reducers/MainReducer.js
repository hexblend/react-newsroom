import { RAISE_INPUT } from '../constants/action-types';
import { SET_ALERT } from '../constants/action-types';

const initialState = {
	raisedInput: false,
	alert: '',
};

function MainReducer(state = initialState, action) {
	switch (action.type) {
		case RAISE_INPUT:
			return {
				...state,
				raisedInput: action.payload,
			};
		case SET_ALERT:
			return {
				...state,
				alert: action.payload,
			};
		default:
			return state;
	}
}

export default MainReducer;
