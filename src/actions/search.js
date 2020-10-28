import axiosConfig from '../services/axiosConfig';

import {
	GET_SEARCH_MOVIES_REQUEST,
	GET_SEARCH_MOVIES_SUCCESS,
	GET_SEARCH_MOVIES_ERROR,
} from './types';

export const loadSearchMovies = (query, page = 1) => async (dispatch) => {
	dispatch({
		type: GET_SEARCH_MOVIES_REQUEST,
	});
	try {
		const res = await axiosConfig.request.get(
			`/search/movie?query=${query}&page=${page}`
		);
		dispatch({
			type: GET_SEARCH_MOVIES_SUCCESS,
			payload: res.data.results,
		});
	} catch (err) {
		dispatch({
			type: GET_SEARCH_MOVIES_ERROR,
			payload: {
				success: err.response.data.success,
				error_message: err.response.data.status_message,
				status: err.response.status,
			},
		});
	}
};
