import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.scss';

const MultiSelect = ({ options, onChange, label }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOnChange = (e) => {
        const option = e.target.value;
        const isChecked = e.target.checked;
        const updatedOptions = { ...selectedOptions, [option]: isChecked };
        setSelectedOptions(updatedOptions);

        const selectedValues = Object.keys(updatedOptions).filter(key => updatedOptions[key]);
        onChange(selectedValues);
    };

    return (
        <div className="MultiSelect">
            <div>{label}</div>
            {options.map((option) => {
                return (
                    <label key={option}>
                        <input type="checkbox" value={option.toLowerCase()} onChange={handleOnChange} />
                        {option}
                    </label>
                );
            })}
        </div>
    );
};

MultiSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func, // (selectedOptions: []) => {}
    label: PropTypes.string,
};

export default MultiSelect;
