import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMovie } from '../../actions/movies';
import config from '../../config';

//TODO FIgure what is wrong with props
const Movie = ({ match, loadMovie, movie: { id, loading, poster_path } }) => {
	useEffect(() => {
		console.log('movie id is: ' + match.params.id);
		loadMovie(match.params.id);
	}, []);
	return (
		<div>
			<img src={`${config.API_IMAGE.small}/${poster_path}`} />
		</div>
	);
};

Movie.propTypes = {
	loadMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	movie: state.movies.movie,
});

export default connect(mapStateToProps, { loadMovie })(Movie);
