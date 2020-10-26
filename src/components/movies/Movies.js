import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import { loadMovies } from '../../actions/movies';

import MovieItem from './MovieItem';

const Movies = ({ loadMovies, movie: { movies, loading, filter, page } }) => {
	useEffect(() => {
		loadMovies(page, filter);
	}, []);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className='card'>
						<div className='item'>
							{movies.length > 0 ? (
								movies.map((movie) => (
									<MovieItem key={movie._id} movie={movie} />
								))
							) : (
								<h4>No movies found...</h4>
							)}
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Movies.propTypes = {
	loadMovies: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	movie: state.movies,
});

export default connect(mapStateToProps, { loadMovies })(Movies);
