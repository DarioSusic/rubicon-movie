import {
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_ERROR,
	GET_MOVIE_REQUEST,
	GET_MOVIE_SUCCESS,
	GET_MOVIE_ERROR,
} from '../actions/types';

const initialState = {
	movie: {},
	movies: [],
	filter: 'popular',
	isFetched: false,
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_MOVIES_REQUEST:
			return {
				...state,
				movies: [],
				isFetched: false,
				loading: true,
			};
		case GET_MOVIES_SUCCESS:
			return {
				...state,
				movies: payload,
				isFetched: true,
				loading: false,
			};
		case GET_MOVIES_ERROR:
			return {
				...state,
				error: payload,
				isFetched: false,
				loading: true,
			};
		case GET_MOVIE_REQUEST:
			return {
				...state,
				movie: {},
				isFetched: false,
				loading: true,
			};
		case GET_MOVIE_SUCCESS:
			return {
				...state,
				movie: payload,
				isFetched: true,
				loading: false,
			};
		case GET_MOVIE_ERROR:
			return {
				...state,
				error: payload,
				isFetched: false,
				loading: true,
			};
		default:
			return state;
	}
}
