import React from 'react';
import Fruit from './Fruit';
import './FruitsList.css';

const FruitsList = () => {
    const fruits = [
        "Apple", "Apricot", "Banana", "Blueberry", "Cherry",
        "Guava", "Lemon", "Mango", "Orange", "Pear",
        "Pineapple", "Raspberry", "Strawberry", "Tomato", "Watermelon"
    ];

   
    return (
        <ul className="list-container">
            {fruits.map((fruit, idx) => {
                return (
                    <Fruit key={idx} name={fruit} />
                )
            })}
        </ul>
    );
};

export default FruitsList;