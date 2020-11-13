import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    /* Navigate to /products
         After pushing Save btn returns to the /products page 
         !!! In the situation of login page instead of "push" use "replace"
         (push allows returning cause it has history while replace doesn't)
         */
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MovieForm;
