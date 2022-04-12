import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import Button from "../UI/Button";

const LoginPage = () => {
    const navigate = useNavigate();
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isLoadingLogin, setLoadingLogin] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<string | null>();
    const Auth = useContext(AuthContext);

    const getLoginApi = async () => {
        setErrorLogin(null);
        setLoadingLogin(true);

        try {
            const response = await fetch(`/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: loginRef.current?.value,
                    password: passwordRef.current?.value,
                }),
            });

            if (401 === response.status) {
                throw new Error("Wrong access. Try again!");
            }

            if (200 !== response.status) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            Auth.login(data.token);

            navigate("/products", { replace: true });
        } catch (error: any) {
            setErrorLogin(error.message);
            setLoadingLogin(false);
        }
    };

    const onSubmitHandler = (event: React.FormEvent): void => {
        event.preventDefault();
        getLoginApi();
    };

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
                                        alt="login form"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={onSubmitHandler}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <span className="h1 fw-bold mb-0">{__APP__.NAME}</span>
                                            </div>

                                            {!!errorLogin ? (
                                                <div className="text-danger">{errorLogin}</div>
                                            ) : null}

                                            <h5
                                                className="fw-normal mb-3 pb-3"
                                                style={{ letterSpacing: "1px" }}
                                            >
                                                Sign into your account
                                            </h5>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Username"
                                                    ref={loginRef}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                    ref={passwordRef}
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <Button
                                                    label={'Login'}
                                                    isLoading={isLoadingLogin}
                                                    isSubmitType={true}
                                                />
                                            </div>
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
};

export default LoginPage;
