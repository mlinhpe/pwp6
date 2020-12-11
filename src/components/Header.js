import React, { Component } from 'react';
import { Tab } from '../components/Tab';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    renderTab(tabName, cN) {
        return <Tab value={tabName} className={cN} />;
    }
    
    render() {
        return (
            <div className="Header">
                {this.renderTab("Home", "Tab")}
                {this.renderTab("About", "Tab")}
                {this.renderTab("Resume", "Tab")}
                {this.renderTab("Works", "Tab")}
                {this.renderTab("Contact", "Tab")}
            </div>
        );
    }
}

export {
    Header
}