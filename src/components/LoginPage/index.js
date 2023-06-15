import {Component} from 'react'

import './index.css'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <img
          src="https://res.cloudinary.com/dfbuwyuet/image/upload/v1686487253/OBJECTS_1x_bsxtp2.png"
          alt="img"
          className="login-img"
        />
        <form className="login-page-label-input-card">
          <img
            src="https://res.cloudinary.com/dfbuwyuet/image/upload/v1686487653/Standard_Collection_8vectory_fdcbrr.png"
            alt="vectory "
          />
          <h1 className="heading-login-page ">Insta Shara</h1>
          <div className="label-input-card">
            <label htmlFor="name" className="label">
              Username
            </label>
            <input type="text" className="input" />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input type="password" className="input" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}
