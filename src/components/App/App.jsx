import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { AppContext } from "../../AppContext";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { buildAPIUrl } from '../../helpers';
import './App.scss';

const App = () => {
    const { setData } = useContext(AppContext);
    const [filterParams, setFilterParams] = useState(null);

    useEffect(() => {
        fetchDataWithParams();
    }, [filterParams]);

    const handleFilterChange = (params) => {
        setFilterParams(params);
    };

    const fetchDataWithParams = async () => {
        try {
            const response = await fetch(buildAPIUrl(filterParams));
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <Header />
            <main>
                <ErrorBoundary>
                    <SortAndFilter onFilterChange={handleFilterChange} />
                    <PropertyListing />
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default App;
