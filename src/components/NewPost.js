import React, { Component } from "react";

class NewPost extends Component {
  constructor() {
    super();
    this.state = { title: "", body: "" };

    this.handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      if (this.state.title.trim() && this.state.body.trim()) {
        console.log(this.state);
        this.handleReset();
      }
    };

    this.handleReset = () => {
      this.setState({
        title: "",
        body: ""
      });
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    name="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols="19"
                    rows="8"
                    placeholder="Body"
                    className="form-control"
                    name="body"
                    onChange={this.handleInputChange}
                    value={this.state.body}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Add Post
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={this.handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">Display Post</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
