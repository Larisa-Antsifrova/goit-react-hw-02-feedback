import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} id={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
