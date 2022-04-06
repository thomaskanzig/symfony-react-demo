import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-3 mt-auto pb-3 text-muted border-top">
            <div className="container d-flex justify-content-between">
                <div>{__APP__.NAME} @ 2022</div>
                <div>v{__APP__.VERSION}</div>
            </div>
        </footer>
    );
}

export default Footer;
