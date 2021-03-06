import React, { Component } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
