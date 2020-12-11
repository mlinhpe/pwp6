import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    render() {
        return (
            <div className="Contact">
                <div className="Title">
                    Contact Form
                </div>
                <form action="/action_page.php">
                    <div className="formSection">
                        <div className="Label">
                            Name
                        </div>
                        <input className="Input" type="text" />
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Email
                    </div>
                        <input className="Input" type="text" />
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Subject
                    </div>
                        <input className="Input" type="text" />
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Message
                        </div>
                        <textarea id="message">
                        </textarea>
                    </div>

                    <div className="formSection">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export {
    Contact
}