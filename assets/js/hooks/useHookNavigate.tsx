import React, {Component} from 'react';
import {useNavigate} from "react-router-dom";

export const withHooksNavigate = (Component: any) => {
    return (props: any) => {
        const navigate = useNavigate();

        return <Component useWithNavigate={navigate} {...props} />;
    };
};
