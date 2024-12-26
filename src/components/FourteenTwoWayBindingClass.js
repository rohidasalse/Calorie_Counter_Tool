import React from "react";

export default class FourteenTwoWayBindingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: [],
      name: "rohidas",
      age: 22,
    };
  }
  fetchData() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ category: data });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <>
        <h2>This is a class component</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={this.state.name} // Two-way binding
            onChange={this.handleChange}
          />
        </div>
        <h2>
          This is {this.state.name} and age is {this.state.age}
        </h2>

        <select>
          {this.state.category.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </>
    );
  }
}
