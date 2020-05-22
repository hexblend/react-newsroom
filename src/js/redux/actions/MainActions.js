import { RAISE_INPUT } from '../constants/action-types';

export function raiseInput(payload) {
	return { type: RAISE_INPUT, payload };
}
