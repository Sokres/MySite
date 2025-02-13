import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18FromTest from 'shared/config/i18/i18ForTest';

export function withRenderTranslate(componetn: ReactNode) {
	return render(
		<I18nextProvider i18n={i18FromTest}>{componetn}</I18nextProvider>
	);
}
