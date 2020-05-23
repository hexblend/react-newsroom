import { RAISE_INPUT, SET_ALERT } from '../constants/action-types';

export function raiseInput(payload) {
	return { type: RAISE_INPUT, payload };
}
export function setAlert(payload) {
	return { type: SET_ALERT, payload };
}
