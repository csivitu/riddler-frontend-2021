import React from 'react';

export default function Login() {
    const redirectUrl = encodeURIComponent(process.env.REACT_APP_REDIRECT_URL);
    const oauthState = encodeURIComponent(Math.random().toString(32).slice(8));
    localStorage.setItem('state', oauthState);
    window.location.href = `${process.env.REACT_APP_ACCOUNTS_URL}/oauth/authorize?clientId=${process.env.REACT_APP_CLIENT_ID}&state=${oauthState}&redirectUrl=${redirectUrl}`;
    return <></>;
}