import { setAlert } from './alert';

import axiosConfig from '../services/axiosConfig';

import {
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_ERROR,
} from './types';

export const loadMovies = (pageNumber = 1, filter = 'popular') => async (
	dispatch
) => {
	dispatch({
		type: GET_MOVIES_REQUEST,
	});
	try {
		const res = await axiosConfig.request.get(
			`/movie/${filter}?page=${pageNumber}`
		);
		console.log('res' + res.data);
		dispatch({
			type: GET_MOVIES_SUCCESS,
			payload: res.data.results,
		});
	} catch (err) {
		dispatch({
			type: GET_MOVIES_ERROR,
			payload: {
				success: err.response.data.success,
				error_message: err.response.data.status_message,
				status: err.response.status,
			},
		});
	}
};
