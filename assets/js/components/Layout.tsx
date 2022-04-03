import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: any) => {
    return (
        <React.Fragment>
            <Header/>
            <main className="flex-shrink-0">
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;
