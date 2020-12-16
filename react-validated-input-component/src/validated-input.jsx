import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordChanged: false
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
      passwordChanged: true
    });
  }

  render() {

    let inputDisplay;
    let errorMessage = '';
    if (!this.state.passwordChanged) {
      inputDisplay = (
        <div className="input-container">
          <input type="password" value={this.state.password} onChange={this.handlePassword}/>
        </div>
      );
    } else if (this.state.passwordChanged && this.state.password.length === 0) {
      errorMessage = 'A password is required.';
      inputDisplay = (
        <div className="input-container">
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
          <i className="fas fa-times"></i>
        </div>
      );
    } else if (this.state.passwordChanged && this.state.password.length < 8) {
      errorMessage = 'Your password is too short.';
      inputDisplay = (
        <div className="input-container">
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
          <i className="fas fa-times"></i>
        </div>
      );
    } else if (this.state.password.length >= 8) {
      inputDisplay = (
        <div className="input-container">
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
          <i className="fas fa-check"></i>
        </div>
      );
    }

    return (
      <div>
        <form>
          <label>
            Password
            {inputDisplay}
          </label>
          <p>{errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default ValidateInput;
