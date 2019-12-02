import React, { Component } from "react";
import "./styles.scss";

const SQUARE_BASE_HEIGHT = 50;
const SQUARE_BASE_WIDTH = 50;

export default class AlignmentExercise extends Component {
  state = {
    squareHeight: SQUARE_BASE_HEIGHT,
    squareWidth: SQUARE_BASE_WIDTH,
    timer: null
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.setState({
      timer: setInterval(() => {
        let { squareHeight, squareWidth } = this.state;
        this.setState({
          squareHeight:
            squareHeight <= 200 ? squareHeight + 20 : SQUARE_BASE_HEIGHT,
          squareWidth: squareWidth <= 200 ? squareWidth + 20 : SQUARE_BASE_WIDTH
        });
      }, 200)
    });
  }

  stopTimer() {
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({
      timer: null
    });
  }

  render() {
    const { squareHeight, squareWidth } = this.state;

    return (
      <div className="AlignmentExercise">
        <div className="wrapper">
          <div
            className="square"
            style={{
              height: `${squareHeight}px`,
              width: `${squareWidth}px`
            }}
          >
            {"Center me, please"}
          </div>
        </div>
      </div>
    );
  }
}
