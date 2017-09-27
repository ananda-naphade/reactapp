import React from 'react';

class UsenameComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = props;
    }
    onChangeHandler(){

    }
    render() {
        return (
            <div>
                <label>Username</label>
                <input type="text" value={this.state.name} onChange={this.onChangeHandler}></input>
            </div>
        );
    }
}

export default UsenameComponent;