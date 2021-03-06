import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

PageTitle.defaultProps = {
  title: '',
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
