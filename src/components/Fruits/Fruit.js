import React, { useState, useEffect } from 'react';
import './Fruit.css';
import Modal from '../UI/Modal';

const Fruit = (props) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [fruitInfo, setFruitInfo] = useState();
    const [isFetched, setisFetched] = useState(false);

    const getFruitInfo = () => {
        // make api request here pass down info as props to modal
        let url = `https://fruityvice.com/api/fruit/${props.name}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setisFetched(true); //make sure we fetch data before modal can open
                setFruitInfo(json);
            })
    };

    // make api calls at once. shouldn't be a problem on a static SPA.
    useEffect(() => {
        getFruitInfo();
    })

    const modalHandler = () => {
        if (modalStatus === false) {
            setModalStatus(true);
        } else if (modalStatus === true) {
            setModalStatus(false);
        }
    };
    return (
        <li className='fruit'>
            {modalStatus && isFetched && 
            <Modal
                onModalClick={modalHandler}
                info={fruitInfo}
            />}
            <img
                className='fruit-pic'
                onClick={modalHandler}
                src={`./images/${props.name}.png`}
                alt={props.name}
            />
        </li>
    )
};

export default Fruit;