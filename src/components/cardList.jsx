import React from 'react';
import './styles.css';
import { Card } from './card';

export const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map(monster =>(
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);