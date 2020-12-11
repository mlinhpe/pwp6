import React, { Component } from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }
    
    render() {
        return (
            <div className="Resume">
                <div className="Title">
                    Resume
                </div>
                <div className="ResumeSection">
                    <div className="ResumeTitleField">
                        <div className="ResumeTitle">
                            Education
                        </div>
                    </div>
                    <div className="ResumeTextField">
                        <div className="ResumeSubTitle">
                            University
                        </div>
                        <div className="ResumeText">
                            Bachelor Degree
                        </div>
                    </div>
                </div>
                <div className="ResumeSection">
                    <div className="ResumeTitleField">
                        <div className="ResumeTitle">
                            Work
                        </div>
                    </div>
                    <div className="ResumeTextField">
                        <div className="ResumeSubTitle">
                            University
                        </div>
                        <div className="ResumeText">
                            Bachelor Degree
                        </div>
                    </div>
                </div>
                <div className="ResumeSection">
                    <div className="ResumeTitleField">
                        <div className="ResumeTitle">
                            Skills
                        </div>
                    </div>
                    <div className="ResumeTextField">
                        <div className="ResumeSubTitle">
                            University
                        </div>
                        <div className="ResumeText">
                            Bachelor Degree
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Resume
}