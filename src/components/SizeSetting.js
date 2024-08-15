import React, { Component } from "react";

class SizeSetting extends Component {
  changeSize(value) {
    console.log(value);
    this.props.onChangeSize(value);
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">Size : {this.props.fontSize}px</div>
        <button onClick={() => this.changeSize(-2)}>Tăng</button>
        <button onClick={() => this.changeSize(+2)}>Giảm</button>
      </div>
    );
  }
}

export default SizeSetting;
