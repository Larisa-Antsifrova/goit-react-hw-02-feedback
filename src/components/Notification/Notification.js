import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.defaultProps = {
  message: 'Nothing to review',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
