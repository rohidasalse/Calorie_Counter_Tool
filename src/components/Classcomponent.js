import React from "react";
export default class Classcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h1>class component</h1>
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}
