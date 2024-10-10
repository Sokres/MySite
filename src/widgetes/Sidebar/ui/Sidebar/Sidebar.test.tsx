import { fireEvent, screen } from '@testing-library/react';
import { withRenderTranslate } from 'shared/lib/withRenderTranslate/withRenderTranslate';
import { Sidebar } from './Sidebar';



describe('Sidebar', () => {
    test('with only first param', () => {
        withRenderTranslate(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        withRenderTranslate(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
