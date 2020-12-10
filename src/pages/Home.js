import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import '../App.css'



class Home extends Component {
    renderText(text, cN) {
        return <Text value={text} className={cN} />;
    }



    render() {
        return (
            <div className="Home">
                <Header/>
                <div className="text">
                    {this.renderText("Hi. I'm Mai Linh.", "IntroText")}
                </div>
            </div>
        );
    }
}

export {
    Home
}
