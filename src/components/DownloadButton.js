import React, { Component } from 'react';

class DownloadButton extends Component {

    render() {
        return (
            <button type="button" className={this.props.className} onClick={() => { document.location.href='/download-cv';}}> 
                {this.props.value}
            </button>
        );
    }
}

export {
    DownloadButton
}