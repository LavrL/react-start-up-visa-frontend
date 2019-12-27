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

                <li className="Advantages__item">
                    <div className="Advantages__item_title">Экономию времени при поиске информации</div>
                    <p className="Advantages__item_text">Вам не нужно искать информацию, собирать ее, выяснять,
                     что есть правда, а что нет. Все, что вам необходимо для процесса получения визы собрано в нашем документе</p>
                    <div className="Advantages__number-background">2</div>
                </li>

                <li className="Advantages__item">
                    <div className="Advantages__item_title">Экономию денег, вам не нужно будет платить агентствам</div>
                    <p className="Advantages__item_text">Большинство программ не требует вмешательства посредником и помощников. 
                    Практически по всем программ заявитель может получить ВНЖ самостоятельно</p>
                    <div className="Advantages__number-background">3</div>
                </li>

                <li className="Advantages__item">
                    <div className="Advantages__item_title">Заполненные шаблоны документов и форм для ВНЖ</div>
                    <p className="Advantages__item_text">Заполненные бизнес-планы, мотивационные письма, анкеты, бланки и т.д. 
                    В целом все то, что вам будет необходимо заполнить для получения ВНЖ по программе.</p>
                    <div className="Advantages__number-background">4</div>
                </li>

                <li className="Advantages__item">
                    <div className="Advantages__item_title">Контакты всех учреждений, участвующих в процессе</div>
                    <p className="Advantages__item_text">Контакты посольств, переводчиков, МФЦ, юристов, фасилитаторов. Более того, 
                    вы можете воспользоваться услугами партнеров, если вам не хочется тратить свое время.</p>
                    <div className="Advantages__number-background">5</div>
                </li>

                <li className="Advantages__item">
                    <div className="Advantages__item_title">Доступ к личному кабинету и системе управления процессом</div>
                    <p className="Advantages__item_text">Пошаговая система уровней позволит контролировать процесс подготовки к 
                    получению ВНЖ (данная функция будет доступна в ближайшее время).</p>
                    <div className="Advantages__number-background">6</div>
                </li>

            </ul>
        </div>
    )
}

export default Advantages;