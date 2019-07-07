import React from "react";

export default class CommentBox extends React.Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h4>Add a comment</h4>
        <textarea
          onChange={e => this.handleChange(e)}
          value={this.state.comment}
        />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}
