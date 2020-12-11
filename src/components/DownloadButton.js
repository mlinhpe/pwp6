import React, { Component } from 'react';

class DownloadButton extends Component {

    render() {
        return (
            <button className={"DownloadButton " + this.props.className}> 
                {this.props.value}
            </button>
        );
    }
}

export {
    DownloadButton
}