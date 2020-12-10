import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.numberOfClicks = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberOfClicks: ++this.numberOfClicks
    });
  }

  render() {
    let temperatureColor;
    if (this.numberOfClicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.numberOfClicks < 6) {
      temperatureColor = 'purple';
    } else if (this.numberOfClicks < 9) {
      temperatureColor = 'light-purple';
    } else if (this.numberOfClicks < 12) {
      temperatureColor = 'red';
    } else if (this.numberOfClicks < 15) {
      temperatureColor = 'orange';
    } else if (this.numberOfClicks < 18) {
      temperatureColor = 'yellow';
    } else {
      temperatureColor = 'white';
    }
    return <button onClick={this.handleClick} className={temperatureColor}>Hot Button</button>;
  }
}

export default HotButton;
