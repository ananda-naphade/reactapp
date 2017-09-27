import React from 'react';

class PasswordComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <label>Password</label>
                <input type="password" value={this.props.value}></input>
            </div>
        );
    }
}

export default PasswordComponent;