import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from '../Dropdown';
import { sortOptions, orderOptions } from '../../../../constants';

describe('Dropdown', () => {
    let onChangeMock;

    beforeEach(() => {
        onChangeMock = jest.fn();
    });

    test('renders the label correctly', () => {
        const label = 'Sort By';
        render(<Dropdown options={sortOptions} onChange={onChangeMock} label={label} />);
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    test('renders sortOptions correctly', () => {
        render(<Dropdown options={sortOptions} onChange={onChangeMock} label="Sort By" />);
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(sortOptions.length);
        sortOptions.forEach((option, index) => {
            expect(options[index]).toHaveAttribute('value', option);
            expect(options[index]).toHaveTextContent(option);
        });
    });

    test('renders orderOptions correctly', () => {
        render(<Dropdown options={orderOptions} onChange={onChangeMock} label="Order" />);
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(orderOptions.length);
        orderOptions.forEach((option, index) => {
            expect(options[index]).toHaveAttribute('value', option);
            expect(options[index]).toHaveTextContent(option);
        });
    });

    test('calls onChange with correct selected option', () => {
        render(<Dropdown options={sortOptions} onChange={onChangeMock} label="Sort By" />);
        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: sortOptions[1] } });
        expect(onChangeMock).toHaveBeenCalledWith(sortOptions[1]);
    });
});