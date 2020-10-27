import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


//TODO edit bootstrap
const ErrorPage = () => {
  return (
    <Fragment>
      <div>
        <div>
          <h1 className='large text-primary'>Oops!</h1>
        </div>
        <div>
          <h2>404 - The Page cannot be found</h2>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to='/' exact as={NavLink}>Go to Homepage</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
