import React from "react";
import './Cards.css';

import esteticaAppImg from '../../assets/img/estetica-app.png';
import portfoliov2Img from '../../assets/img/portfolio-v2.png';
import calculoImcImg from '../../assets/img/calculoImc.png';

import mysqlIcon from '../../assets/img/mysql-icon.png';
import nodejsIcon from '../../assets/img/nodejs-icon.png';
import reactIcon from '../../assets/img/react-icon.png';


export default function Cards() {   
    return (
        <section className="cards-body" id="portfolio">
            <section className="card" slide="up" >
                <img src={esteticaAppImg} alt="card" cardimg="esteticaWidth" />
                <h2>Estética WebApp</h2>
                <span>Em desenvolvimento</span><br />
                <ul>
                    <div className="div-li-icon">
                        <img src={reactIcon} alt="React" />
                        <li>REACT</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={nodejsIcon} alt="NodeJS" />
                        <li>NODEJS</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={mysqlIcon} alt="MySql" />
                        <li>MYSQL</li>
                    </div>
                </ul>
            </section>
            <section className="card" slide="up" >
                <img src={portfoliov2Img} alt="card" cardimg="portfolioWidth" />
                <h2>Portfólio pessoal</h2>
                <span>Desenvolvimento finalizado</span><br />
                <ul>
                    <div className="div-li-icon">
                        <img src={reactIcon} alt="React" />
                        <li>REACT</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={nodejsIcon} alt="NodeJS" />
                        <li>NODEJS</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={mysqlIcon} alt="MySql" />
                        <li>MYSQL</li>
                    </div>
                </ul>
            </section>
            <section className="card" slide="up" >
                <img src={calculoImcImg} alt="card" cardimg="calculoImcWidth" />
                <h2>Cálculo IMC</h2>
                <span>Desenvolvimento finalizado</span><br />
                <ul>
                    <div className="div-li-icon">
                        <img src={reactIcon} alt="React" />
                        <li>REACT</li>
                    </div>
                </ul>
            </section>
        </section>)
}