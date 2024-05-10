import React, { useContext, useEffect } from 'react';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { AppContext } from "../../AppContext";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './App.scss';

const App = () => {
    const { setData } = useContext(AppContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/properties`);
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
                    <SortAndFilter />
                    <PropertyListing />
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default App;
