import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AppDataProvider, AppContext } from './AppContext';

describe('AppContext', () => {
    it('renders its children', () => {
        render(
            <AppDataProvider>
                <div>Child Component</div>
            </AppDataProvider>
        );
        const childComponent = screen.getByText('Child Component');
        expect(childComponent).toBeInTheDocument();
    });

    it('provides data and setData values to its children through context', () => {
        const TestDataComponent = () => {
            const { data, setData } = React.useContext(AppContext);
            return (
                <div>
                    <span data-testid="data">{data}</span>
                    <button onClick={() => setData('New data')}>Set Data</button>
                </div>
            );
        };

        render(
            <AppDataProvider>
                <TestDataComponent />
            </AppDataProvider>
        );

        const dataSpan = screen.getByTestId('data');
        const setDataButton = screen.getByText('Set Data');

        expect(dataSpan.textContent).toBe('');
        
        act(() => {
            setDataButton.click();
        });

        expect(dataSpan.textContent).toBe('New data');
    });
});
