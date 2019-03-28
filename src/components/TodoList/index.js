import React, { Component } from 'react';
import './styles.css';

class TodoList extends Component {
  constructor(props){
    super(props);

    this.state={
        userInput:'',
        list:[]
    }
  }

  getCacheList(){
    let Cachelist = JSON.parse(localStorage.getItem('listTodos'));
    if(Cachelist) this.setState({
      list: Cachelist
    })
  }


  changeUserInput(input){
    this.setState({
      userInput:input
    })
  }

  addToList(value){
    if(value){
    let listArray= this.state.list;

    listArray.push(value);

    this.setState({
      list: listArray,
      userInput:''
    })
    localStorage.setItem('listTodos',JSON.stringify(this.state.list))}else{
      alert("Digite algo para adicionar um todo")
    }
  }

  DeleteOfList(value){
    let ListArray = this.state.list
    let pos=ListArray.indexOf(value)
    ListArray.splice(pos,1);

    this.setState({
      list:ListArray
    })
    localStorage.setItem('listTodos',JSON.stringify(this.state.list))
  }
  DeleteList(){
    let listArray = []
    this.setState({
      list:listArray
    })
    localStorage.setItem('listTodos',JSON.stringify(listArray))
  }

  ChangeOfList(value,newValue){
    if(newValue){
    let listArray = this.state.list
    let pos = listArray.indexOf(value)
    listArray[pos] = newValue
    this.setState({
      lista:listArray
    })
    localStorage.setItem('listTodos',JSON.stringify(this.state.list))}else{
      alert("Digite algo para modificar este todo")
    }
  }


  componentDidMount(){
    this.getCacheList();
  }


  render() {
    return (

      <div id="maintodolist">
       <input 
        onChange={(input)=>this.changeUserInput(input.target.value)}
        value={this.state.userInput}
        type='text'
       />

       <button onClick={()=>this.addToList(this.state.userInput)}>Adicionar</button>
      
       {this.state.list.map((value)=>(
         <div class="todolist">
          <p>{value}</p>
          <div class="actions">
         <button class="mini" onClick={()=>this.DeleteOfList(value)}>Remover</button>
         <button class="mini" onClick={()=>this.ChangeOfList(value,this.state.userInput)}>Alterar</button>
         </div>
         </div>
        ))}
        
      
      <button id="remove" onClick={()=>this.DeleteList()}>Remover tudo</button>
      
      </div>
    );
  }
}

export default TodoList;
