import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  return (
    <div className="buttons-container">
      <button className="buttons-container__button" onClick={props.addTask}>Add</button>
      <button className="buttons-container__button" onClick={props.removeTask}>Remove</button>
      <button className="buttons-container__button" onClick={props.clearTasks}>Clear</button>
    </div>
  );
}

Buttons.propTypes = {
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired
};

export default Buttons;
