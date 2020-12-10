import React, { Component } from 'react';

class Tab extends Component {

    render() {
        return (
            <button className={"Tab " + this.props.className}> 
                {this.props.value}
            </button>
        );
    }
}

export {
    Tab
}