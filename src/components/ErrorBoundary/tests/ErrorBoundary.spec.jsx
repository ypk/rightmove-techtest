import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

const ChildComponent = () => <div>Child Component</div>;

const ErrorThrowingChild = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary', () => {
    it('renders children when there is no error', () => {
        const { getByText } = render(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>
        );
        expect(getByText('Child Component')).toBeInTheDocument();
    });

    it('renders error message when there is an error', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        const { getByText } = render(
            <ErrorBoundary>
                <ErrorThrowingChild />
            </ErrorBoundary>
        );

        expect(getByText('Something went wrong.')).toBeInTheDocument();
        consoleErrorSpy.mockRestore();
    });
});
