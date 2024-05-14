import React from 'react';
import { render, screen } from '@testing-library/react';
import MultiSelect from '../MultiSelect';
import { propertyTypes, priceOptions, bedOptions, sortOptions, orderOptions } from '../../../../constants';

describe('MultiSelect', () => {
    let onChangeMock;

    beforeEach(() => {
        onChangeMock = jest.fn();
    });

    test('renders propertyTypes options correctly', () => {
        render(<MultiSelect options={propertyTypes} onChange={onChangeMock} label="Property Type" />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(propertyTypes.length);
        propertyTypes.forEach((option, index) => {
            expect(checkboxes[index]).toHaveAttribute('value', option.toLowerCase());
        });
    });

    test('renders priceOptions options correctly', () => {
        render(<MultiSelect options={priceOptions.map(String)} onChange={onChangeMock} label="Price" />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(priceOptions.length);
        priceOptions.forEach((option, index) => {
            expect(checkboxes[index]).toHaveAttribute('value', String(option));
        });
    });

    test('renders bedOptions options correctly', () => {
        render(<MultiSelect options={bedOptions.map(String)} onChange={onChangeMock} label="Bedrooms" />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(bedOptions.length);
        bedOptions.forEach((option, index) => {
            expect(checkboxes[index]).toHaveAttribute('value', String(option));
        });
    });

    test('renders sortOptions options correctly', () => {
        render(<MultiSelect options={sortOptions} onChange={onChangeMock} label="Sort By" />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(sortOptions.length);
        sortOptions.forEach((option, index) => {
            expect(checkboxes[index]).toHaveAttribute('value', option);
        });
    });

    test('renders orderOptions options correctly', () => {
        render(<MultiSelect options={orderOptions} onChange={onChangeMock} label="Order" />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(orderOptions.length);
        orderOptions.forEach((option, index) => {
            expect(checkboxes[index]).toHaveAttribute('value', option);
        });
    });
});