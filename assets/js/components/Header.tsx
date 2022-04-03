import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="pb-3 mb-4 mt-5 border-bottom">
                <div className="container">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4">Digital Store</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
