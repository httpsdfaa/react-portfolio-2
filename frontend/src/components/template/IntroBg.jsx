import React from "react";
import './IntroBg.css';
import svgBg from '../../assets/svg-bg.svg'

export default props =>
    <section className="intro" slide="loadTop">
        <div className="intro">
            <h1>Oi,<br />Sou o Deivison</h1>
            <p>Cursando Análise e Desenvolvimento de Sistemas
                e com foco no desenvolvimento web fullstack.
            </p>
        </div>
        <div className="svg-bg">
            <img src={svgBg} alt="background-svg" />
            <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        </div>
    </section>