import React, { useState, useEffect } from 'react';
import './Fruit.css';
import Modal from '../UI/Modal';

const Fruit = (props) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [fruitInfo, setFruitInfo] = useState();

    const getFruitInfo = () => {
        let url = `https://fruityvice.com/api/fruit/${props.name}`
        fetch(url, { headers: { 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(json => setFruitInfo(json))
    };

    useEffect(() => {
        getFruitInfo();
    }, [])

    const modalHandler = () => {
        if (modalStatus === false) {
            setModalStatus(true);
        } else if (modalStatus === true) {
            setModalStatus(false);
        }
    };

    return (
        <li className='fruit'>
            {modalStatus &&
                <Modal
                    onModalClick={modalHandler}
                    info={fruitInfo}
                />}
            {fruitInfo &&
                <img
                    className='fruit-pic'
                    onClick={modalHandler}
                    src={`./images/${props.name}.png`}
                    alt={props.name}
                />}
        </li>
    )
};

export default Fruit;