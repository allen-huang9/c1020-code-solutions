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

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({
      counter: this.state.counter + 1
    }, 1000));
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClickPlayPause() {
    this.setState({
      isPause: !this.state.isPause
    });
  }

  handleClickReset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    let button;
    if(this.state.isPause) {
      button = "fas fa-play";
    } else {
      button = "fas fa-pause";
    }

    return (
      <div></div>
      <div className="circle-size">
        <i onClick={this.handleClickReset} className="far fa-circle">{this.state.counter}</i>
      </div>
      <div className="button-size">
        <i class={button}></i>
      </div>
    );
  }
}

export default Stopwatch;
