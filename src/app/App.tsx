import './index.css';
import { Suspense } from 'react';
import { useThem } from './Providers/ThemProvider';
import { classNames } from 'shared/lib/classNaame/ClassName';
import { AppRouter } from './Providers/router';
import { NavBar } from 'widgetes/NavBar';
import { Sidebar } from 'widgetes/Sidebar';

const App = () => {
    const { theme } = useThem();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback="loading">
                <div className="app-wrap">
                    <Sidebar />
                    <div className="page-wrap">
                        <NavBar />
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
