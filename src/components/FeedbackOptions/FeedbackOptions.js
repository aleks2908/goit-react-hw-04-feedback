import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const firstLetterToUppercase = name => name[0].toUpperCase() + name.slice(1);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonList}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          className={css.button}
          onClick={onLeaveFeedback}
        >
          {firstLetterToUppercase(option)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
