import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    let labelText;
    let divClassOval;
    let circlePosition;

    if (this.state.isOn) {
      labelText = 'On';
      divClassOval = 'oval-on';
      circlePosition = 'circle-right';
    } else {
      labelText = 'Off';
      divClassOval = 'oval-off';
      circlePosition = 'circle-left';
    }

    return (
      <label onClick={this.handleClick}>
        <div className={divClassOval}>
          <div className={circlePosition}></div>
        </div>
        {labelText}
      </label>
    );
  }
}

export default ToggleSwitch;
