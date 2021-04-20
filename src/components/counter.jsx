import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  /*    // Methode 1 , utiliser bind et un constructeur pour  resoudre le probleme de undifiend
    constructor() {
      super();
      this.handleIncrement = this.handleIncrement.bind(this); 
    } */

  // methode 2 : Utiliser Arrow Function
  handleIncrement = (product) => {
    console.log(product);
    // Utiliser setState pour afficher le changement de valeur dans UI
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Incerement
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
