import React, { ChangeEvent } from 'react'


interface AddTaskProps { onAdd: (task: string) => void }
interface AddTaskState { inputValue: string }


export class AddTask extends React.Component<AddTaskProps, AddTaskState> {
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
    this.setState({ inputValue: '' })
  }


  render() {
    if (this.state.inputValue.length > 5) {
      return (
        <header className="app-header">
          <h1 >My Tasks</h1>
          <h3>Now: {new Date().toLocaleTimeString()}.</h3>
          <section className="add-task">
            <label htmlFor="addTask">Add new task:</label>
            <input id="addTask" type="text" onChange={this.onChange} value={this.state.inputValue} name='addTask' />
            <button onClick={this.handleClick}>Add task</button>
          </section>
        </header>
      );
    } else {
      return (
        <header className="app-header">
          <h1 style={{'color': '#21ee0a'}} >My Tasks</h1>
          <h3>Now: {new Date().toLocaleTimeString()}.</h3>
          <section className="add-task">
            <label htmlFor="addTask">Add new task:</label>
            <input id="addTask" type="text" onChange={this.onChange} value={this.state.inputValue} name='addTask' />
            <div className='up-button-text'>Text must be at least 5 symbols</div>
          </section>
        </header>
      );
    }
  }
}

export default AddTask;

