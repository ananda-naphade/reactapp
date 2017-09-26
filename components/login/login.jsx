import React from 'react';
import UsernameComponent from '../username';

class LoginComponent extends React.Component {
   render() {
      return (
         <div>
            Login form
            <UsernameComponent />
         </div>
      );
   }
}

export default LoginComponent;