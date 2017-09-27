import React from 'react';
import UsernameComponent from '../username';
import PasswordComponent from '../password';

class LoginComponent extends React.Component {
    loginButtonHandler(){
        alert('here');
    }
   render() {
      return (
         <div>
            Login form
            <UsernameComponent name="Amrapali"/>
            <PasswordComponent value="amrapali"/>
            <button onClick={this.loginButtonHandler} >Login</button>
         </div>
      );
   }
}

export default LoginComponent;