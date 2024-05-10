import React from 'react';
import { render, screen } from '@testing-library/react';
import NoPropertyAvailable from '../NoPropertyAvailable';

describe('NoPropertyAvailable', () => {
    it('renders the "No properties available" message', () => {
        render(<NoPropertyAvailable />);
        const messageElement = screen.getByText(/No properties available for the selected filter./i);
        expect(messageElement).toBeInTheDocument();
    });
});
