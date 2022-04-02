import React from 'react';

class LoginPage extends React.Component {
    render() {
        return (
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-6 d-none d-md-block">
                                        <img
                                            src="https://picsum.photos/1000/1200"
                                            alt="login form" className="img-fluid"
                                            />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Sign
                                                    into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" className="form-control form-control-lg" placeholder="Username"/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" className="form-control form-control-lg" placeholder="Password"/>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                            type="button">Login
                                                    </button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{color: '#393f81;'}}>Don't have an
                                                    account? <a href="#!" style={{color: '#393f81;'}}>Register here</a></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginPage;
