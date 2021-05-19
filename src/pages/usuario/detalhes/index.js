import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import moment from 'moment';


export default class Usuario extends Component {
  state = {
    usuario: {}
  };

  componentDidMount() {
    const {id} = this.props.match.params;

    fetch(`http://localhost:3003/sistema/usuario/${id}`)
    .then(usuario =>
          usuario.json().then(usuario=> this.setState({usuario}))
      
      )
  }

  render(){
    const {usuario} = this.state;
                  //verificar se tem erro após conectar com o back
    if (usuario.ativo){
      usuario.ativo = "Usuario Ativo";

    }else{
      usuario.ativo = "Usuario Inativo";
    }
    
    return (
      <div className="usuario-info">
          <h1>{usuario.nome}</h1>
          <h1>{usuario.ativo}</h1>
          <h1>{new Intl.NumberFormat(`pt-BR`, {style: `currency`, currency: `BRL`}).format(usuario.salario)}</h1>
          <h1>{moment(usuario.dataNascimento).format('DD/MM/YYYY')}</h1>
          <br />   
        
        <Link to={`/usuarios`}>Voltar</Link> <br />
        <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link> <br />
        <Link to={`/deletarUsuario//${usuario.id}`}>Deletar</Link> 
      </div>
    )
  }

}