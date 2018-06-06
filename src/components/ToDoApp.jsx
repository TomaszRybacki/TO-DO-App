import React, { Fragment } from 'react';

import Buttons from './Buttons.jsx';
import Tasks from './Tasks.jsx';
import Logo from './../iconComponents/Logo.jsx';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.taskNumber = 1;

    this.state = {
      tasksList: []
    };
  }

  handleTaskAdd = () => {
    const tasksList = [...this.state.tasksList];
    tasksList.push(`Task number ${this.taskNumber}`);
    this.taskNumber += 1;
    this.setState({
      tasksList
    });
  }

  handleTaskRemove = () => {
    const tasksList = [...this.state.tasksList];
    tasksList.pop();
    this.taskNumber = (this.taskNumber <= 1) ? 1 : this.taskNumber -= 1;
    this.setState({
      tasksList
    });
  }

  handleClearTasks = () => {
    const tasksList = [];
    this.taskNumber = 1;
    this.setState({
      tasksList
    });
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <Logo className="header__icon" />
          <h1 className="header__title">TO-DO App</h1>
        </header>

        <main className="main">
          <Buttons
            addTask={this.handleTaskAdd}
            removeTask={this.handleTaskRemove}
            clearTasks={this.handleClearTasks}
          />
          <Tasks tasksList={this.state.tasksList} />
        </main>

        <footer className="footer">
          <span className="footer__text">Designed and codded with <span className="footer__text--red">&#10084;</span> by Tomasz Rybacki<br /> Icon made by <a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.freepik.com">Freepik</a> from <a className="footer__link" target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com">flaticon.com</a></span>
        </footer>
      </Fragment>
    );
  }
}

export default ToDoApp;
