import React from 'react';
import './Footer.css';
const axiosApi = require('../../api/axios');

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            email: '',
            message: '',
            error: false,
            successful: false
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value })
        if (this.state.error === true)
            this.setState({ error: false })
    }
    handleChangeSurname(e) {
        this.setState({ surname: e.target.value })
        if (this.state.error === true)
            this.setState({ error: false })
    }
    handleChangeEmail(e) {
        this.setState({ email: e.target.value })
        if (this.state.error === true)
            this.setState({ error: false })
    }
    handleChangeMessage(e) {
        this.setState({ message: e.target.value })
    }

    handleChangeSubmit(e) {
        e.preventDefault();
        const name = this.state.name
        const surname = this.state.surname
        const email = this.state.email
        const message = this.state.message

        if (name === '' || surname === '' || email === '') {
            this.setState({ error: true })
            setTimeout(() => {
                this.setState({ error: false })
            }, 5000)
        } else {
            axiosApi(name, surname, email, message)

            this.setState({
                name: '',
                surname: '',
                email: '',
                message: '',
                error: false,
                successful: true
            })

            setTimeout(() => {
                this.setState({ successful: false })
            }, 5000)

            
        }

    }

    render() {
        return (
            <footer className="footer" id='contact'>
                <section className="form">
                    <h1>Contate-me</h1>
                    <form onSubmit={this.handleChangeSubmit}>
                        <input type="text" className='name' placeholder='Nome*'
                            value={this.state.name}
                            onChange={this.handleChangeName} />
                        <input type="text" className='surname' placeholder='Sobrenome*'
                            value={this.state.surname}
                            onChange={this.handleChangeSurname} />
                        <input type="email" className='email' placeholder='Email*'
                            value={this.state.email}
                            onChange={this.handleChangeEmail} />
                        <div className="error">
                            {
                                this.state.error ?
                                    <span className="errorRequired">*Campo obrigatório </span>
                                    : null
                            }
                            {
                                this.state.successful ?
                                    <span className="successful">Pronto! Agora só aguardar meu retorno por email 😁</span>
                                    : null
                            }
                        </div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensagem'
                            value={this.state.message}
                            onChange={this.handleChangeMessage}></textarea>
                        <input className="inputSubmit" type="submit" value="Pronto" />

                    </form>
                </section>
                <span className="developer">
                    Feito por <a href='https://github.com/fernandedfa' >Deivison Fernandes</a> - 2022
                </span>
            </footer>
        )
    }
}