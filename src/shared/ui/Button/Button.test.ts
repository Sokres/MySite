import { render, screen } from '@testing-library/react';
describe('Button', () => {
    test('Test render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
