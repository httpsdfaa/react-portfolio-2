import React from 'react';
import './Footer.css';

export default props =>
    <footer className="footer" id='contact'>
        <section className="form">
            <h1>Contate-me</h1>
            <form action="/">
                <input type="text" className='name' placeholder='Nome'/>
                <input type="text" className='surname' placeholder='Sobrenome'/>
                <input type="email" className='email' placeholder='Email'/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensagem'></textarea>
                <input className="inputSubmit" type="submit" value="Pronto" />
            </form>
        </section>
        <span className="developer">
            Feito por <a href='https://github.com/fernandedfa' >Deivison Fernandes</a> - 2022
        </span>
    </footer>