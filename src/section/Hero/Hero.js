import React from 'react';
import './Hero.css';
import Button from '../../button';

const Hero = () => {
    return (
        <header className="Hero ">
            <div className="Hero__container">
                <p className="Hero__title">Инструкция по программе Startup Visa Испания</p>
                <span className="Hero__description">2499 рублей за подробный и пошаговый
                план вашего переезда в Испанию по программе Startup Visa</span>
                <div className="Buttons">
                    <Button newClassName="Btn_blue" btnName="Купить инструкцию" />
                    <Button newClassName="Btn_white" btnName="Позвоните мне" />
                </div>
            </div>

        </header>
    )
}

export default Hero;