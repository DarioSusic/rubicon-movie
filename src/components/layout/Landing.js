import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = () => {

  return (
    <div>
      <img
        className="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg?text=First slide&bg=373940"
        alt="First slide"
      />
    </div>
  );
};

export default (Landing);
