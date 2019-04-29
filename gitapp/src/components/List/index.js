import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./styles.css";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    filter: "diogocezar",
    repos: []
  };
  componentDidMount() {
    this.loadRepos();
  }
  loadRepos = async () => {
    const url = `${this.state.filter}/repos`;
    const response = await api.get(url);
    this.setState({ repos: response.data });
  };
  handleButtonClick = () => {
    this.loadRepos();
  };
  handleChangeInput = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    return (
      <Fragment>
        <h1 className="repos">Lista de Repositórios {this.state.filter}</h1>
        <div id="repos-filter">
          <Input label="Filtar" onChange={this.handleChangeInput} />
          <Button onClick={this.handleButtonClick}>Filtrar</Button>
        </div>
        <div id="repos-list">
          {(this.state.repos.length &&
            this.state.repos.map((item, key) => {
              return (
                <article key={key}>
                  <strong>
                    {item.name} - {item.id}
                  </strong>
                  <p>{item.description}</p>
                  <Link to={`/details/${this.state.filter}/${item.id}`}>
                    Detalhes
                  </Link>
                </article>
              );
            })) || <p>Carregando...</p>}
        </div>
      </Fragment>
    );
  }
}

export default List;
