import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPages/AboutPages.lazy';
import { MainPageLazy } from './pages/MainPages/MainPage.lazy';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './Theme/ThtmeContext';
import { useThem } from './Theme/useThem';
import { className } from './helpers/ClassName';

const App = () => {
	const { theme, handleThemeChange } = useThem();
	return (
		<div className={className('app', { hovered: true }, [theme])}>
			<Link to={'/'}>Main</Link> <br />
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy />} />
					<Route path={'/'} element={<MainPageLazy />} />
				</Routes>
			</Suspense>
			<button onClick={handleThemeChange}>Theme</button>
		</div>
	);
};

export default App;
