import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
  }

  handleClickMenu() {
    this.setState({
      isOpen: true
    });
  }

  handleClickLink() {
    this.setState({
      isOpen: false
    });
  }

  render() {

    if (this.state.isOpen) {
      return (
        <div className="menu-open">
          <div className="menu">
            <p>Menu</p>
            <a href="#" onClick={this.handleClickLink}>About</a>
            <a href="#" onClick={this.handleClickLink}>Get Started</a>
            <a href="#" onClick={this.handleClickLink}>Sign In</a>
          </div>
          <div className="window-shade" onClick={this.handleClickLink}></div>
        </div>
      );
    } else {
      return (
        <div className="menu-icon-size">
          <i className="fas fa-bars" onClick={this.handleClickMenu}></i>
        </div>
      );
    }
  }
}

export default AppDrawer;
