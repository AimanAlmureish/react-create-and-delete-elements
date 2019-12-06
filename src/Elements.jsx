import React, { Component } from "react";

export default class Elements extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.element.map((item, key) => {
            return item.length > 0 ? (
              <li key={key} onClick={this.props.delete}>
                {item}
              </li>
            ) : (
              console.log("none")
            );
          })}
        </ul>
      </div>
    );
  }
}

// import React from "react";

// const Elements = props => (
//   <ul>
//     {props.items.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>
// );

// export default Elements;
