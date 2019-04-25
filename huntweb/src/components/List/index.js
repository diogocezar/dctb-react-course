import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./styles.css";

class List extends Component {
  state = {
    repos: []
  };
  componentDidMount() {
    this.loadRepos();
  }
  loadRepos = async () => {
    const response = await api.get();
    this.setState({ repos: response.data });
  };
  render() {
    return (
      <Fragment>
        <h1 className="repos">Lista de Repositórios</h1>
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
