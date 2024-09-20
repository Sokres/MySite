import { FC, useMemo, useState } from 'react';
import {
    TEHEME_KEY_LOCAL_STORAGE,
    Theme,
    ThemeContext,
} from '../lib/ThtmeContext';

const defaultTheme =
	(localStorage.getItem(TEHEME_KEY_LOCAL_STORAGE) as Theme) || Theme.LIGHT;
const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
