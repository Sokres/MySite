import { useContext } from 'react';
import { TEHEME_KEY_LOCAL_STORAGE, Theme, ThemeContext } from './ThtmeContext';

interface UseThemResult {
	handleThemeChange: () => void;
	theme: Theme;
}
export function useThem(): UseThemResult {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleThemeChange = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTheme);
		localStorage.setItem(TEHEME_KEY_LOCAL_STORAGE, newTheme);
	};
	return { theme, handleThemeChange };
}
