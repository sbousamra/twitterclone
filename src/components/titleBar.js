import React from 'react';
import lodash from 'lodash';

class TitleBar extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.trackUsername = this.trackUsername.bind(this)
    this.trackPassword = this.trackPassword.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  trackUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  trackPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSignup() {
    return (
      <a className="nav-link" href="/signup">
        <button type="button" className="btn btn-lg btn-info">Sign Up</button>
      </a>
    )
  }

  handleLogout() {
    if (this.props.loggedIn) {
      return (
        <a className="nav-link">
          <button className="btn btn-lg btn-info" onClick={this.props.userLogout}>Log Out</button>
        </a>
      )
    } else {
      return (
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Username" onChange={this.trackUsername}/>
              <input className="form-control mr-sm-2" type="password" placeholder="Password" onChange={this.trackPassword}/>
            </form>
            <a className="nav-link" href="#">
              <button className="btn btn-lg btn-info" onClick={() => this.props.dispatchLogin(this.state.username, this.state.password)}>
                Login
              </button>
            </a>
          </div>
        </div>
      )
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="container-fluid twitterTitleBarBackground">
          <nav className="navbar navbar-toggleable-md navbar-inverse twitterTitleBarBackground">
          <div className="col-5">
          </div>
            <div className="col-4">
              <a href="/">
                <img src="http://yoganga.com/wp-content/uploads/2016/01/Twitter-Black.png" className="img-fluid twitterTitleBarLogo" alt="Responsive"/>
              </a>
            </div>
            <div className="col-md-auto">
              <ul className="navbar-nav">
                <a className="nav-link col-7"></a>
                <a className="nav-link" href="#"><button className="btn btn-lg btn-info">+</button></a>
                {this.handleLogout()}
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <nav className="navbar navbar-toggleable-md navbar-inverse twitterTitleBarBackground">
          <div className="col-5">
          </div>
            <div className="col-1">
              <a href="/">
                <img src="http://yoganga.com/wp-content/uploads/2016/01/Twitter-Black.png" className="img-fluid twitterTitleBarLogo" alt="Responsive"/>
              </a>
            </div>
            <div className="col-4">
              <ul className="navbar-nav">
                <a className="nav-link col-4"></a>
                {this.handleSignup()}
                {this.handleLogout()}
              </ul>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default TitleBar;