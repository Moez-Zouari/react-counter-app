import React, { Component } from "react";

class Counter extends Component {
    state  = {
        count : 0
     
    };

  /*    // Methode 1 , utiliser bind et un constructeur pour  resoudre le probleme de undifiend
    constructor() {
      super();
      this.handleIncrement = this.handleIncrement.bind(this); 
    } */

    // methode 2 : Utiliser Arrow Function
    handleIncrement = product => {
      console.log(product);
      // Utiliser setState pour afficher le changement de valeur dans UI
      this.setState({ count: this.state.count + 1})
    }


    render() {
  
      return(
        <div> 
        <span  className={this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Incerement</button>
      </div>
      );
    }

    formatCount() {
      const { count } = this.state;
      return    count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
  }


  





}

export default Counter;
