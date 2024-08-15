import React, { Component } from "react";

class Result extends Component {
  setStyle(color) {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize,
    };
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          Color : {this.props.color} Fontsize: {this.props.fontSize}px
        </div>
        <h1 style={this.setStyle()}>Nội dung setting</h1>
      </div>
    );
  }
}

export default Result;
