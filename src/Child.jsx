import React, { Component } from "react";
import Elements from "./Elements";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      arr: []
    };
  }

  typing = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      text: "",
      arr: [...this.state.arr, this.state.text]
    });
    this.deleting = this.deleting.bind(this);
  };

  deleting = () => {
    const arr = this.state.arr.filter((index, todoIndex) => {
      return todoIndex;
    });
    this.setState({ arr });
  };

  render() {
    return (
      <div>
        <h2>CLICK ON ELEMENT TO DELETE IT</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={event => {
              this.typing(event);
            }}
            value={this.state.text}
          />
          <button>Button</button>
        </form>
        {/* <p>{this.state.arr}</p> */}
        <Elements
          element={this.state.arr}
          key={this.state.keys}
          delete={this.deleting}
        />
      </div>
    );
  }
}
