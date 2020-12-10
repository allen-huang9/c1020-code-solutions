import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    let temperatureColor;
    if (this.state.numberOfClicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.numberOfClicks < 6) {
      temperatureColor = 'purple';
    } else if (this.state.numberOfClicks < 9) {
      temperatureColor = 'light-purple';
    } else if (this.state.numberOfClicks < 12) {
      temperatureColor = 'red';
    } else if (this.state.numberOfClicks < 15) {
      temperatureColor = 'orange';
    } else if (this.state.numberOfClicks < 18) {
      temperatureColor = 'yellow';
    } else {
      temperatureColor = 'white';
    }
    return <button onClick={this.handleClick} className={temperatureColor}>Hot Button</button>;
  }
}

export default HotButton;
