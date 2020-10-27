import React, { Fragment } from 'react';

const Search = () => {
	return (
		<Fragment>
			<div className='search'>
				<form action='' autocomplete='on'>
					<input
						id='search'
						name='search'
						type='text'
						placeholder="What're we looking for ?"
					/>
					<input id='search_submit' value='Rechercher' type='submit' />
				</form>
			</div>
		</Fragment>
	);
};

export default Search;
