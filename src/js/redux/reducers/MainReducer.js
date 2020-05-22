import { RAISE_INPUT } from '../constants/action-types';

const initialState = {
	raisedInput: false,
};

function MainReducer(state = initialState, action) {
	switch (action.type) {
		case RAISE_INPUT:
			return {
				...state,
				raisedInput: action.payload,
			};
		default:
			return state;
	}
}

export default MainReducer;
