import React from 'react';
import './styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div>
        <input type='search' 
            placeholder={placeholder}
            onChange={handleChange}/>
    </div>
)
