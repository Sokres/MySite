import { fireEvent, screen } from "@testing-library/react"
import { withRenderTranslate } from "shared/lib/withRenderTranslate/withRenderTranslate";
import { Sidebar } from "widgetes/Sidebar/ui/Sidebar/Sidebar";

describe('Sidebar', () => {
    test('First param', () => {
        withRenderTranslate(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    });
    test('Toggle Sidebar', () => {
        withRenderTranslate(<Sidebar />)
        const sidebarToggle = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(sidebarToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('show')
    });
});