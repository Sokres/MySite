 
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from 'app/Providers/ThemProvider';
import './shared/config/i18/i18';
import ErrorBoundary from 'app/Providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);
