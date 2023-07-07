import React from 'react';

import './ThemeProvider.scss';

interface Props {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: Props): JSX.Element {
    const [theme, setTheme] = React.useState('light');

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`${theme}Mode`}>
            <button type="button" onClick={handleClick}>
                Light/Dark
            </button>
            {children}
        </div>
    );
}

export default ThemeProvider;
