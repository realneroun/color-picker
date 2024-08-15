import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["red", "green", "blue", "yellow"],
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }
  setActiveColor(color){
    console.log(color);
    this.props.onReceiverColor(color);
  }

  render() {
    var elmColors = this.state.color.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={()=> this.setActiveColor(color)}
        >
          abc
        </span>
      );
    });

    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">ColorPicker</div>
        {elmColors}
      </div>
    );
  }
}

export default ColorPicker;
