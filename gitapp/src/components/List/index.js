import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./styles.css";
import Button from "../Button";
import Input from "../Input";

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
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Repositório
                  </a>
                </article>
              );
            })) || <p>Carregando...</p>}
        </div>
      </Fragment>
    );
  }
}

export default List;
