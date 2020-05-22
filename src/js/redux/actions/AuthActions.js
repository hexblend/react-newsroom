import { SIGN_IN } from '../constants/action-types';

export function signIn(payload) {
	return { type: SIGN_IN, payload };
}
