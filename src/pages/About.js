import React, { Component } from 'react';
import { DownloadButton } from '../components/DownloadButton';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    renderDownloadButton(buttonName, cN) {
        return <DownloadButton value={buttonName} className={cN} />;
    }
    
    render() {
        return (
            <div className="About">
                <div className="AboutHeader">
                    About Me
                </div>
                <div className="AboutText">
                    My Name is Mai Linh Pham and I am a Data Engineer and Scala Developer. I love creativity and taking up new challenges.
                    Technology inspires me and I am always enthusiastic to learn something new!
                </div>
                <div className="AboutHeader">
                    Contact Details
                </div>
                <div className="AboutText">
                    mai_linh.pham@campus.lmu.de
                </div>
                {this.renderDownloadButton("Download Resume", "DownloadButton")}
            </div>
        );
    }
}

export {
    About
}