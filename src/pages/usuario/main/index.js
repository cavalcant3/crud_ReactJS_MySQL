import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      usuario: []

    }
  }
  componentDidMount(){
    //aqui coloca o link
   // para o react carregar os dados da lista 
    fetch('  ')
    .then(usuario =>
      usuario.json().then(usuario=> this.setState({usuario}))
      )
  }
  render() {
    const {usuario} = this.state;

    return usuario.map((usuario, index) => (
      <div className="usuario-list">
        <div key= {index}>
          <h5>{usuario.nome}</h5>
          <article>
            <strong>{usuario.salario}</strong>
            <p><Link to={'/usuarios/${usuario.id}'}>Detalhes</Link></p>
            <br />
          </article>  
        </div>
      </div>
    ))
  }

}