import React, { useContext } from 'react';
import PropertyCard from '../PropertyCard';
import NoPropertyAvailable from '../NoPropertyAvailable';
import { AppContext } from '../../AppContext';
import './PropertyListing.scss';

const PropertyListing = () => {
    const { data } = useContext(AppContext);

    return (
        <div className="PropertyListing">
            {data && data.length > 0 ? (
                <ul>
                    {
                        data.map((property, index) => (
                            <li key={index}>
                                <PropertyCard {...property} />
                            </li>
                        ))
                    }
                </ul>
            ) : (
                <NoPropertyAvailable />
            )}
        </div>
    );
};

export default PropertyListing;
