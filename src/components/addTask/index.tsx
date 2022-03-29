import React, { ChangeEvent } from 'react'


interface AddTaskProps {onAdd: (task: string) => void}
interface AddTaskState {inputValue: string}


export class AddTask extends React.Component <AddTaskProps, AddTaskState> {
  constructor(props: AddTaskProps) {
    super(props);
    this.state = { inputValue: '' };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleClick() {
    this.props.onAdd(this.state.inputValue);
    this.setState({inputValue: ''})
  }  
  
  
  render() {
    return (
      <div>
        <label htmlFor="addTask">Add new task:</label>
        <input id="addTask" type="text" onChange={this.onChange} value={this.state.inputValue} name='addTask' />
        <button onClick={this.handleClick}>Add task</button>
        <span>{this.props.children}</span>
      </div>
    );

  }
}

export default AddTask;

