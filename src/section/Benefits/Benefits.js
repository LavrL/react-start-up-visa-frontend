import React from 'react';
import './Benefits.css';
import Button from '../../button';

const Benefits = () => {
    return (
        <div className="Benefits">
            <div className="Benefits__container">
                <div className="Benefits__title">Преимущества</div>
                <ul className="Benefits__items">

                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild3665-6663-4562-a563-653238626565/7.svg"
                                alt="star" />
                        </div>
                        <p className="Benefits__item_title">Сравнение программ по сложности</p>
                        <span className="Benefits__item_text">We are the leading firm by delivering quality and value to our clients.</span>
                    </li>

                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild3239-6639-4264-b933-353066323134/9.svg"
                                alt="clock" />
                        </div>
                        <p className="Benefits__item_title">Не платить деньги агентствам</p>
                        <span className="Benefits__item_text">All our professionals have more than 5 years of legal experiences.</span>
                    </li>

                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild6666-3832-4732-b031-326335306334/1.svg"
                                alt="chat" />
                        </div>
                        <p className="Benefits__item_title">Поддержка менеджеров</p>
                        <span className="Benefits__item_text">Our managers are always ready to answer your questions. You can call us at the weekends and at night.</span>
                    </li>

                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild3162-3730-4131-b465-646336333263/4.svg"
                                alt="gift" />
                        </div>
                        <p className="Benefits__item_title">Понимание временных затрат</p>
                        <span className="Benefits__item_text">We like to make people happy. We ask our clients about their birthday and prepare cool presents.</span>
                    </li>

                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild3866-3666-4361-b831-623134333539/11.svg"
                                alt="people" />
                        </div>
                        <p className="Benefits__item_title">Информация из первых уст</p>
                        <span className="Benefits__item_text">This method lets us to get success in problems of all levels.</span>
                    </li>


                    <li className="Benefits__item">
                        <div className="Benefits__item_logo">
                            <img className="Benefits__item_lg"
                                src="https://static.tildacdn.com/tild3833-3561-4563-a466-353237366566/5.svg"
                                alt="wi-fi" />
                        </div>
                        <p className="Benefits__item_title">Просчет денежных затрат</p>
                        <span className="Benefits__item_text">We take care about our clients time. Just call us — and we will help you with all the questions.</span>
                    </li>

                </ul>
                <div className="Benefits__buttons">
                    <Button newClassName="Btn_blue" btnName="Я хочу купить инструкцию и получить ВНЖ самостоятельно" />
                    <Button newClassName="Btn_white2" btnName="У меня остались вопросы, позвоните мне!" />
                </div>
            </div>
            <footer className="Benefits__footer">
                Made By Tilda
            </footer>
        </div>
    )
}

export default Benefits;