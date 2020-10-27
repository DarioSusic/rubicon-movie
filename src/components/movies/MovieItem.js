import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import config from '../../config';

const MovieItem = ({ movie: { id, title, vote_average, poster_path } }) => {
	return (
		<div className='bg-dark'>
			<Link to={`/movie/${id}`}>
				{poster_path && (
					<img src={`${config.API_IMAGE.small}/${poster_path}`} />
				)}
			</Link>
			<Link to={`/movie/${id}`}>
				<div>
					<p className='my-1'>{title}</p>
					<p>{vote_average}</p>
				</div>
			</Link>
		</div>
	);
};

MovieItem.propTypes = {
	movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(null)(MovieItem);
