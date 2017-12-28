// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from './actions/actions'
//
// import AddTodo from './components/AddTodo.js'
// import TodoList from './components/TodoList.js'
//
// class App extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props
//
//       return (
//          <div>
//             <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
//             <TodoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }
// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }
// export default connect(select)(App);
//Keys

// import React from 'react';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [
//         {
//           component: 'First ...',
//           id: 1
//         },
//
//         {
//           component: 'Third...',
//           id: 3
//         },
//         {
//           component: 'Second ...',
//           id: 2
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           {this.state.data.map((dynamicComponent, i) => <Content key= {i} componentData = {dynamicComponent}/>)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//       <div>{this.props.componentData.component}</div>
//       <div>{this.props.componentData.id}</div>
//       </div>
//     );
//   }
// }
// export default App;
//refs
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: ''
//     }
//     this.updateState = this.updateState.bind(this);
//     this.clearInput = this.clearInput.bind(this);
//   };
//
//   updateState(e){
//     this.setState({data: e.target.value});
//   }
//   clearInput() {
//     this.setState({data: ''});
//     ReactDOM.findDOMNode(this.refs.myInput).focus();
//   }
//   render() {
//     return (
//       <div>
//         <input value = {this.state.data} onChange = {this.updateState}
//         ref = "myInput"></input>
//         <button onClick = {this.clearInput}>CLEAR</button>
//         <h4>{this.state.data}</h4>
//         </div>
//     );
//   }
// }
//
// export default App;



//Events
// import React from 'react';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       data: 'Initial data...'
//     }
//     this.updateState = this.updateState.bind(this);
//   };
//   updateState() {
//     this.setState({data: 'Data updated from the child component...'})
//   }
//   render() {
//     return (
//       <div>
//         <Content myDataProp = {this.state.data}
//         updateStateProp= {this.updateState}></Content>
//       </div>
//     );
//   }
// }
//
// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick = {this.props.updateStateProp}>CLICK</button>
//         <h3>{this.props.myDataProp}</h3>
//       </div>
//     )
//   }
// }
//
// export default App;
//Complex form example
// import React from 'react';
//
// class App extends React.Component {
//    constructor(props) {
//       super(props);
//
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <Content myDataProp = {this.state.data}
//                updateStateProp = {this.updateState}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.props.myDataProp}
//                onChange = {this.props.updateStateProp} />
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
// export default App;
//form simple
// import React from 'react';
// class App extends React.Component {
//   constructor(props){
//   super(props);
//   this.state = {
//     data: 'Initial data...'
//   }
//
//   this.updateState = this.updateState.bind(this);
// };
//
// updateState(e) {
//   this.setState({data: e.target.value});
// }
//
// render() {
//   return (
//     <div>
//       <input type = "text" value = {this.state.data}
//       onChange = {this.updateState} />
//       <h4> {this.state.data}</h4>
//     </div>
//     );
//  }
// }
//
// export default App;
// //Lifecyle Methods
// import React from 'react';
//
// class App extends React.Component {
//    constructor(props) {
//       super(props);
//
//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }
//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }
//    componentWillReceiveProps(newProps) {
//       console.log('Component WILL RECIEVE PROPS!')
//    }
//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }
//    componentWillUpdate(nextProps, nextState) {
//       console.log('Component WILL UPDATE!');
//    }
//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }
//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;








// findDomNodeHandler
// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//   };
//   findDomNodeHandler() {
//     var myDiv = document.getElementById('myDiv');
//     ReactDOM.findDOMNode(myDiv).style.color = 'green';
//   }
//   render() {
//     return (
//       <div>
//         <button onClick = {this.findDomNodeHandler}> FIND DOME NODE</button>
//         <div id = "myDiv"> NODE</div>
//         </div>
//
//     );
//   }
// }
//
// export default App;

//Force Update
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHander.bind(this);
  };
  forceUpdateHander() {
    this.forceUpdate();
  };
  render() {
      return (
        <div>
        <button onClick = {this.forceUpdateHandler}> FORCE UPDATE</button>
        <h4>Random number: {Math.random()}</h4>
        </div>
      );
  }
}
