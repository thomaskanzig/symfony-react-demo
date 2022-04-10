import React, {ReactElement, useState} from 'react';

interface AuthContextProviderProps {
    children: ReactElement;
}

interface IAutoContext {
    token: string | null,
    isLoggedIn: boolean,
    login: (token: string | null) => void,
    logout: () => void,
}

const AuthContext = React.createContext<IAutoContext>({
    token: null,
    isLoggedIn: false,
    login: (token: string | null) => {},
    logout: () => {},
});

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const userIsLoggedIn = !!token;

    const loginHandler = (token: string | null) => {
        setToken(token);
        localStorage.setItem('token', token ?? '');
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;