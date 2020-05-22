import { SIGN_IN } from '../constants/action-types';

const initialState = {
	auth: {},
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SIGN_IN:
			return state;
		default:
			return state;
	}
}
