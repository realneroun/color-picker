import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12,
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onSetColor(params) {
    this.setState({
      color: params,
    });
  }

  onChangeSize(value) {
    console.log(value);
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <=36 ){
      this.setState({
        fontSize: this.state.fontSize + value
      })
      console.log(this.state.fontSize)
    }
  }

  onSettingDefault(value){
    if(value){
      this.setState({
        color: "red",
        fontSize: 12
      })
    }
  }

  render() {
    return (
      <React.StrictMode>
        <ColorPicker
          color={this.state.color}
          onReceiverColor={this.onSetColor}
        />
        <Reset onSettingDefault={this.onSettingDefault}/>
        <SizeSetting
          fontSize={this.state.fontSize}
          onChangeSize={this.onChangeSize}
        />
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </React.StrictMode>
    );
  }
}

export default App;
