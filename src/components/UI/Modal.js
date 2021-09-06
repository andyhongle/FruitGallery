import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <div className='backdrop' onClick={props.onModalClick}></div>
            <div className="modal">
                <div className='fruit-pic-name-container'>
                    <img
                        className='modal-fruit-pic'
                        src={`./images/${props.info.name}.png`}
                        alt={props.name}
                    />
                    <h2 className='fruit-name'>{props.info.name}</h2>
                </div>
                <div className='fruit-info'>
                    <p>This fruit is called&nbsp;<b> {props.info.name}.</b></p>
                    <br/>
                    <p>The genus name for {props.info.name} is&nbsp;
                        <b> {props.info.genus}</b> and it comes from the&nbsp;
                        <b>{props.info.family}</b> family.
                    </p>
                    <br />
                    <p>
                        It has <b>{props.info.nutritions.calories}</b> calories,&nbsp;
                        <b>{props.info.nutritions.fat}</b> grams of fat,&nbsp;
                        <b>{props.info.nutritions.carbohydrates}</b> grams of carbohydrates,&nbsp;
                        <b>{props.info.nutritions.protein}</b> grams of protein and&nbsp;
                        <b>{props.info.nutritions.sugar}</b> grams of sugar.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Modal;