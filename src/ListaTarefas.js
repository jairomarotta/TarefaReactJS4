import React from 'react';
import './ListaTarefas.css';

class ListaTarefas extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        tarefas: []
      };

      this.AdicionarTarefa = this.AdicionarTarefa.bind(this);

      this.blue = {
        background: '#87CEEB'
      }
      this.normal = {
        background: '#ffffff'
      }
    }

    AdicionarTarefa = (event) => {
      if (event.key === 'Enter') {
        let tarefas = this.state.tarefas;
  
        if(event.target.value !== ""){
          tarefas.push({descricao: event.target.value}); //acrecenta um valor
        }
    
        this.setState({
          tarefas: tarefas
        });
      }
    }
  
    AlterarTarefa = (valor, index_tarefa) => {
      const lista_temporaria_tarefas = this.state.tarefas.slice(); 
      lista_temporaria_tarefas.splice(index_tarefa, 1, { descricao: valor }); //retira um valor e coloca outro no lugar
      this.setState({tarefas: lista_temporaria_tarefas});
    }
  
    ApagarTarefa = (index_tarefa) => {
      const lista_temporaria_tarefas = this.state.tarefas.slice(); //slice para criar uma cópia correta evitando problemas de memória
      lista_temporaria_tarefas.splice(index_tarefa, 1); //retornar lista retirando um elemento
      this.setState({tarefas: lista_temporaria_tarefas});
    }

    render(){
      return(
  
        <div id='principal_conteudo'>
            <div id='topo'>
                <p><b>Tarefas</b></p>
            </div>
            <div id='entrada_texto'>
              <input  type="text" 
                      title="Informe uma tarefa" 
                      placeholder="Informe uma tarefa e precione ENTER" 
                      size="60" 
                      onKeyPress={this.AdicionarTarefa}
              />
            </div>
            <div id="tarefas">  
            {
              this.state.tarefas.map( (c, index) => {
                  return(
                        <div key={index}>                           
                          <input type="checkbox" id="1" name={c.descricao}/>
                          <label> 
                            
                            <input type="text" 
                                   title="Informe uma tarefa" 
                                   size="40" 
                                   defaultValue={c.descricao} 
                                   style={ ( (c.descricao.indexOf('estudar') !== -1) || (c.descricao.indexOf('ler') !== -1)  ) ? this.blue : this.normal } 
                            />
                            <button type="button" className="BtnSalvar" onClick={() => this.AlterarTarefa(c.descricao, index)}>
                                ✓
                              </button>
                              <button type="button" className="BtnExcluir" onClick={() => this.ApagarTarefa(index)}>
                                X
                              </button>
                          </label>
                        </div>
                  );
              })
          }
            </div>
        </div>
            
      )
    }
  
};

export default ListaTarefas;