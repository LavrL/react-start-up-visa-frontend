import React from 'react';
import './Advantages.css';

const Advantages = () => {
    return (
        <div className="Advantages">
            <p className="Advantages__title">Что вы получаете?</p>
            <ul className="Advantages__list">
                <li className="Advantages__item">
                    <div className="Advantages__item_title">Качественную и актуальную информацию</div>
                    <p className="Advantages__item_text">Вся информация взята не просто из открытых источников,
                    а проверена на себе. Инструкции пишут люди, которые сами переезжали по этим программам</p>
                    <div className="Advantages__number-background">1</div>
                </li>
            </ul>
        </div>
    )
}

export default Advantages;