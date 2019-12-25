import React from 'react';
import './Instruction.css';
import Button from '../../button/Button';


const Instruction = () => {
    return (
        <div className="Instruction">
            <div className="Instruction__container">
                <div className="Instruction__main">
                    <div className="Instruction__left">
                        <p className="Instruction__left_title">Что такое инструкция?</p>
                        <div className="Instruction__separator"></div>
                        <span className="Instruction__left_text">Это PDF документ, который станет для вас учебным пособием по получению ВНЖ.
                            Покупая нашу инструкцию, вы получаете подробный, пошаговый план получения ВНЖ.
                            Это не просто информация из открытых источников. Это знания людей,
                            которые переехали по этой программе и знают все нюансы и "подводные камни",
                            которые могут вас подстерегать на вашем пути.</span>
                        <div className="Buttons">
                            <Button newClassName="Btn_blue" btnName="Скачать пример инструкции" />
                        </div>
                    </div>
                    <div className="Instruction__right">
                        <img src="https://thumb.tildacdn.com/tild3839-6662-4734-b530-333438633431/-/cover/920x1120/center/center/-/format/webp/portfolio-11_2.jpg"
                            className="Instruction__right_image" alt="book" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Instruction;