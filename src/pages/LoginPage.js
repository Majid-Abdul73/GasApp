// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       <form>
//         <div>
//           <label>Username</label>
//           <input type="text" name="username" />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" name="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;







import React from 'react';
// import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="layout-container">
        <div className="layout-content-container">
          <div className="image-container">
            <div className="welcome-text">
              Welcome to our Gas Pipeline Monitoring System
            </div>
          </div>
          <div className="form-container">
            <label className="form-field">
              <p className="label-text">Username</p>
              <input
                placeholder="Username"
                className="form-input"
                value=""
              />
            </label>
            <label className="form-field">
              <p className="label-text">Password</p>
              <input
                placeholder="Password"
                className="form-input"
                value=""
              />
            </label>
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="form-checkbox"
              />
              <p className="checkbox-text">Keep me signed in.</p>
            </label>
            <div className="button-container">
              <button className="sign-in-button">
                <span>Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
