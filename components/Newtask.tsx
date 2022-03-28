import React from 'react'

export class AddTask extends React.Component{
   constructor (props){
       super(props);
       this.state = {task:''};
   }
  
   getInputValue() {
       this.setState({documen-  t.querySelector('input').value}) //this.state.setState() = document.querySelector('input').value;
   }


   render() {
       return <div>this.props.task</div>

   }
}