import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      numberOfClicks: ++state.numberOfClicks
    }));
  }

  render() {
    console.log(this.state.numberOfClicks);
    if (this.state.numberOfClicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.numberOfClicks < 6) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;
    } else if (this.state.numberOfClicks < 9) {
      return <button onClick={this.handleClick} className="light-purple">Hot Button</button>;
    } else if (this.state.numberOfClicks < 12) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;
    } else if (this.state.numberOfClicks < 15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (this.state.numberOfClicks < 18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}

export default HotButton;
