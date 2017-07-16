import React, { Component } from 'react';
import InputSection from './components/InputSection';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor() {
      super();
      this.state = {
          data:[]
      }
      this.addToDo = this.addToDo.bind(this);
      this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(item) {
     const addToDo = [...this.state.data, item];
     this.setState({data:addToDo});
  }

  deleteToDo(itemId){
      this.state.data.splice(itemId,1);
      this.setState({data : [...this.state.data]});
  }

  render() {
    return (
      <div className="container">
          <InputSection
             class="row"
             addToDo= {this.addToDo}
          />
          <ToDoList
              dataItems={this.state.data}
              deleteToDo={this.deleteToDo}
          />
        </div>
    );
  }
}

export default App;
