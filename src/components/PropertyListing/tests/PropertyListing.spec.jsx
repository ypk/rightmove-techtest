import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import { AppContext } from '../../../AppContext';

describe('PropertyListing', () => {
    const mockData = [
        {
            id: 50908683,
            bedrooms: 2,
            summary: 'A modern two bedroom, two bathroom luxury apartment set in this prestigious and iconic development in Nine Elms SW8. The properties benefit from a generous open plan living room, fully integrated kitchen, master en suite and family bathroom, and private winter garden offering breath-taking views ...',
            displayAddress: 'Sky Gardens, Wandsworth Road, Nine Elms SW8',
            propertyType: 'Apartment',
            price: 960000,
            branchName: 'Chase Evans, Elephant and Castle',
            propertyUrl: '/property-for-sale/property-50908683.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=50908683',
            propertyTitle: '2 bedroom apartment for sale',
            mainImage: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/66k/65124/50908683/65124_P37186_IMG_08_0001_max_476x317.jpg',
        },
        // Add more mock data objects as needed
    ];

    it('should render property cards for each item in the data array', () => {
        render(
            <AppContext.Provider value={{ data: mockData }}>
                <PropertyListing />
            </AppContext.Provider>
        );

        const propertyCards = screen.getAllByRole('listitem');
        expect(propertyCards.length).toBe(mockData.length);

        mockData.forEach((property, index) => {
            const propertyCard = propertyCards[index];
            const propertyTitle = screen.getByText(property.propertyTitle, { container: propertyCard });
            const propertyAddress = screen.getByText(property.displayAddress, { container: propertyCard });
            const propertyImage = propertyCard.querySelector('img');

            expect(propertyTitle).toBeInTheDocument();
            expect(propertyAddress).toBeInTheDocument();
            expect(propertyImage).toBeInTheDocument();
            expect(propertyImage).toHaveAttribute('src', property.mainImage);
        });
    });

    it('should not render property cards if data is null', () => {
        render(
            <AppContext.Provider value={{ data: null }}>
                <PropertyListing />
            </AppContext.Provider>
        );

        const propertyCards = screen.queryAllByRole('listitem');
        expect(propertyCards.length).toBe(0);
    });
});