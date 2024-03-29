import React, { useEffect, useState } from 'react';

import Cookie from 'js-cookie';

import './GetUser.scss';

const COOKIE_USER = 'zoom-waiting-room-user';

export function GetUser(): JSX.Element {
    const [cookieUser, setCookieUser] = useState<string>('');

    useEffect(() => {
        const cookieValue = Cookie.get(COOKIE_USER);
        const loggedInSection = document.getElementById('loggedIn') as HTMLElement;
        if (loggedInSection) {
            loggedInSection.innerHTML = cookieValue ? `You are logged in as ${cookieValue}` : 'You need to log in';
        }
    }, []);

    const clearInput = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = '';
    };

    const handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setCookieUser(e.target.value);
    };

    const handleSetCookie = () => {
        Cookie.set(COOKIE_USER, cookieUser);
    };

    return (
        <>
            <div>
                <p id="loggedIn" />
            </div>
            <div className="inputContainer">
                <input type="text" className="input" placeholder="User" onChange={handleInputChange} onBlur={clearInput} />
                <button className="buttonSubmit" type="submit" onClick={handleSetCookie}>
                    Log in
                </button>
            </div>
        </>
    );
}

export default GetUser;
