import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from '../search/Search';

export const AppNavbar = () => {
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>RUBICON MOVIES DB</Link>
			</h1>
			<Fragment>
				<ul>
					<li>
						<Link to='/movies'>Movies</Link>
					</li>
					<li>
						<Link to='/tv-shows'>TV Shows</Link>
					</li>
				</ul>
			</Fragment>
		</nav>
	);
};

export default AppNavbar;
