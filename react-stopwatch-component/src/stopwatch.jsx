import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPause: true,
      counter: 0
    };
    this.handleClickPlayPause = this.handleClickPlayPause.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  handleClickPlayPause() {
    this.setState(state => ({
      isPause: !state.isPause
    }));
    if (this.state.isPause) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  handleClickReset() {
    if (this.state.isPause) {
      this.setState({
        counter: 0
      });
    }
  }

  render() {
    let button;
    if (this.state.isPause) {
      button = 'fas fa-play';
    } else {
      button = 'fas fa-pause';
    }

    return (
      <div className="stopwatch-container">
        <div className="circle-size">
          <i onClick={this.handleClickReset} className="far fa-circle">
            <div className="counter">{this.state.counter}</div>
          </i>
        </div>
        <div className="button-size">
          <i onClick={this.handleClickPlayPause} className={button}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
