import React from 'react';

const Header = () => {
    return (
        <header className="pb-3 mb-4 mt-5 border-bottom">
            <div className="container">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">{__APP__.NAME}</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
