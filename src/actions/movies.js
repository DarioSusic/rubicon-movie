import axiosConfig from '../services/axiosConfig';

import {
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_ERROR,
	GET_MOVIE_REQUEST,
	GET_MOVIE_SUCCESS,
	GET_MOVIE_ERROR,
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

export const loadMovie = (id) => async (dispatch) => {
	dispatch({
		type: GET_MOVIE_REQUEST,
	});
	try {
		const res = await axiosConfig.request.get(`/movie/${id}`);
		dispatch({
			type: GET_MOVIE_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_MOVIE_ERROR,
			payload: {
				success: err.response.data.success,
				error_message: err.response.data.status_message,
				status: err.response.status,
			},
		});
	}
};
