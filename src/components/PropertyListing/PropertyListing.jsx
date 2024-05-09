import React, { useContext } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { AppContext } from '../../AppContext';

const PropertyListing = () => {
    const { data } = useContext(AppContext);

    return (
        <ul className="PropertyListing">
            {data &&
                data.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
