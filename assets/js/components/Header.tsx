import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";

const Header = () => {
    const Auth = useContext(AuthContext);

    return (
        <header className="pb-3 mb-4 mt-5 border-bottom">
            <div className="container d-flex justify-content-between">
                <a
                    href="/"
                    className="d-flex align-items-center text-dark text-decoration-none"
                >
                    <span className="fs-4">{__APP__.NAME}</span>
                </a>

                <button className="btn btn-light" onClick={Auth.logout}>
                    Logout <i className="bi bi-box-arrow-right"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
