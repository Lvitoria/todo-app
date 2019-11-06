import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoFom'
import TodoList from './todoList'
import todoFom from './todoFom';

const url = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: '', list: []}

        this.handleChange        = this.handleChange.bind(this)
        this.handleAdd           = this.handleAdd.bind(this)
        this.handleSearch        = this.handleSearch.bind(this)
        this.handleClear         =  this.handleClear.bind(this)
        
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone    = this.handleMarkAsDone.bind(this)
        this.handleRemove        = this.handleRemove.bind(this)

        this.refresh() //mostra os dados vindo da api
    }

    //desativa
    handleMarkAsPending(todo){
        // console.log(id);
        axios.put(`${url}/${todo._id}`, {...todo, done:false})
                .then(resp => this.refresh())
    }

    //ativa
    handleMarkAsDone(todo){
        // console.log(id);
        axios.put(`${url}/${todo._id}`, {...todo, done:true})
                .then(resp => this.refresh())
    }

    //remove
    handleRemove(id){
        console.log("entro no deletar")
        axios.delete(`${url}/${id}`)
             .then((resp) => this.refresh())
    }

    //listar
    refresh(description = ''){
  
        const search = description ? `&description__regex=/${description}/` : ''
       
        axios.get(`${url}?sort=-createdAt${search}`)
            // .then((resp) => console.log(resp.data))
            .then((resp) => this.setState({...this.state, description , list: resp.data }))
 
    }

    //controla o input
    handleChange(e){
        // console.log("leitura");
        /* se você comentar a linha de baixo não vai conseguir digitar no campo/input
        pq o value do input e o description e o description faz parte do estado do react 
        portando quem controla o valor dele agora e o react e não mais o a dom isso é um componenten controlavel*/
        this.setState({...this.state, description: e.target.value});

    }

    //adicionar
    handleAdd(){
        // console.log(this.state.description)
        // console.log("add");
        // console.log(this);
        const description = this.state.description
        axios.post(url, {description})
            //  .then(resp => console.log('funcionou!'))
             .then(resp => this.refresh())
    }

    //pesquisa
    handleSearch(){
        console.log("search")
       this.refresh(this.state.description)
    }

    //limpar o formulario
    handleClear(){
        console.log("limpar");
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                {/* <TodoForm handleAdd = {() => this.handleAdd()}/> */}
                <TodoForm 
                    listen      = {this.handleChange}
                    description ={this.state.description}
                    handleAdd   = {this.handleAdd}
                    search      = {this.handleSearch}
                    clear       = {this.handleClear}

                />
                
                <TodoList 
                    list          = {this.state.list}
                    handleRemove  = {this.handleRemove}
                    MarkAsDone    = {this.handleMarkAsDone}
                    MarkAsPending = {this.handleMarkAsPending}
                    
                />
            </div>
        )
    }
}


