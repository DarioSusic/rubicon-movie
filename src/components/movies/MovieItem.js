import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import config from '../../config';

const MovieItem = ({ movie: { id, title, vote_average, poster_path } }) => {
	return (
		<div className='card bg-light'>
			<img src={`${config.API_IMAGE.small}/${poster_path}`} />
			<p>{id}</p>
			<p className='my-1'>{title}</p>
			<p>{vote_average}</p>
		</div>
	);
};

export default MovieItem;
