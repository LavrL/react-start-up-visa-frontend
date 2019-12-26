import React from 'react';
import './Savings.css';
import Button from '../../button/Button';
import arrow from '../../img/arrow.png';

const Savings = () => {
    return (
        <div className="Savings">
            <p className="Savings__title">Купить инструкцию за 2 500 рублей</p>
            <span className="Savings__description">И сэкономить деньги на получение ВНЖ</span>
            <div className="Savings__button">
                <div className="Savings__btn">
                    <img className="Savings__icon" src={arrow} alt="arrow"></img>
                    <Button newClassName="Savings__Btn_white" btnName="Купить инструкцию" />
                </div>
            </div>
        </div>
    )
}

export default Savings;