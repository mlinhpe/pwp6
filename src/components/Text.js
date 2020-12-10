import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <text className={"Text " + this.props.className}> 
                {this.props.value}
            </text>
        );
    }
}

export {
    Text
}