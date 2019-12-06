// import React, { Component } from "react";
// import "./App.css";
// import Elements from "./Elements";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: "",
//       items: []
//     };
//   }

//   onChange = event => {
//     this.setState({ term: event.target.value });
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     this.setState({
//       term: "",
//       items: [...this.state.items, this.state.term]
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form className="App" onSubmit={this.onSubmit}>
//           <input value={this.state.term} onChange={this.onChange} />
//           <button>Submit</button>
//         </form>
//         <Elements items={this.state.items} />
//       </div>
//     );
//   }
// }

import React from "react";
import "./App.css";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3]
    };
  }

  mine = num => {
    return num + 1;
  };
  render() {
    return (
      <div className="App">
        <Child newArr={this.state.arr} mine={this.mine} />
      </div>
    );
  }
}

export default App;
