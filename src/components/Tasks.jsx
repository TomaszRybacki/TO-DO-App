import React from 'react';
import PropTypes from 'prop-types';

function Tasks(props) {
  return (
    <div className="tasks-container">
      <ul className="tasks-list">
        {props.tasksList.map((task, taskIndex) => <li className="task" key={task}>{task}</li>)}
      </ul>
    </div>
  );
}

Tasks.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tasks;
