import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import MultiSelect from './MultiSelect/MultiSelect';
import {
    propertyTypes,
    priceOptions,
    bedOptions,
    sortOptions,
    orderOptions
} from '../../constants';
import './SortAndFilter.scss';
import PropTypes from 'prop-types';

const SortAndFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        minBeds: '',
        maxBeds: '',
        sortBy: 'price',
        orderBy: 'asc',
        propertyTypesSelected: []
    });

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            onFilterChange(filters);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [filters, onFilterChange]);

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <div className="SortAndFilter">
            <Dropdown
                label="Sort By"
                options={sortOptions}
                onChange={value => handleFilterChange('sortBy', value)}
            />
            <Dropdown
                label="Order By"
                options={orderOptions}
                onChange={value => handleFilterChange('orderBy', value)}
            />
            <Dropdown
                label="Min Beds"
                options={bedOptions}
                onChange={value => handleFilterChange('minBeds', value)}
            />
            <Dropdown
                label="Max Beds"
                options={bedOptions}
                onChange={value => handleFilterChange('maxBeds', value)}
            />
            <Dropdown
                label="Min Price"
                options={priceOptions}
                onChange={value => handleFilterChange('minPrice', value)}
            />
            <Dropdown
                label="Max Price"
                options={priceOptions}
                onChange={value => handleFilterChange('maxPrice', value)}
            />
            <MultiSelect
                label="Property Types"
                options={propertyTypes}
                onChange={value => handleFilterChange('propertyTypes', value)}
            />
        </div>
    );
};



SortAndFilter.propTypes = {
    onFilterChange: PropTypes.func
};

export default SortAndFilter;
