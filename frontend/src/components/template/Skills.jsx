import React from "react";
import './Skills.css';

import html5Img from '../../assets/img/html-icon.png';
import css3Img from '../../assets/img/css3-icon.png';
import jsImg from '../../assets/img/js-icon.png';
import reactImg from '../../assets/img/react-icon.png';
import tailwindServiceImg from '../../assets/img/service-icon.png';
import nodejsImg from '../../assets/img/nodejs-icon.png';
import mysqlImg from '../../assets/img/mysql-icon.png';

export default props =>
    <section className="skills" id="skills">
        <h1>Skills</h1>
        <div className="frontend">
            <h3>FRONTEND</h3>
            <ul>
                <div className="div-li-icon">
                    <img src={html5Img} alt="html5" />
                    <li>HTML5</li>
                </div>
                <div className="div-li-icon">
                    <img src={css3Img} alt="css" />
                    <li>CSS3</li>
                </div>
                <div className="div-li-icon">
                    <img src={jsImg} alt="javascript" />
                    <li>JAVASCRIPT</li>
                </div>
                <div className="div-li-icon">
                    <img src={reactImg} alt="react" />
                    <li>REACT</li>
                </div>
                <div className="div-li-icon">
                    <img src={tailwindServiceImg} alt="tailwindcss" />
                    <li>TAILWIND CSS</li>
                </div>
            </ul>
        </div>
        <div className="backend">
            <h3>BACKEND</h3>
            <ul>
                <div className="div-li-icon">
                    <img src={nodejsImg} alt="nodejs" />
                    <li>NODE.JS COM EXPRESS</li>
                </div>
                <div className="div-li-icon">
                    <img src={mysqlImg} alt="mysql" />
                    <li>MYSQL DATABASE <i>{`( Banco de dados )`}</i></li>
                </div>
            </ul>
        </div>
    </section>