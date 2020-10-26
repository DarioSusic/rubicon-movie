import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import { loadMovies } from '../../actions/movies';

const Movies = ({ loadMovies, movies: { loading, filter, page } }) => {
	useEffect(() => {
		loadMovies(page, filter);
	}, []);

	return <div className='content'>Movies</div>;
};

Movies.propTypes = {
	loadMovies: PropTypes.func.isRequired,
	movies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	movies: state.movies,
});

export default connect(mapStateToProps, { loadMovies })(Movies);
