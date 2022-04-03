import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main className="flex-shrink-0">
                    {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Layout;
