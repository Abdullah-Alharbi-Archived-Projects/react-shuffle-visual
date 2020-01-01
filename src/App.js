import React, { Component } from "react";
import Number from "./components/Number";

class App extends Component {
  state = {
    numbers: [...Array(102).keys()],
    steps: []
  };

  componentDidMount() {
    let numbers = [...this.state.numbers];
    numbers = numbers.map((n, i) => <Number key={i} index={i} number={n} />);
    this.setState({ numbers });
  }

  change = () => {
    const numbers = [...this.state.numbers];
    const steps = [...this.state.steps];
    const len = numbers.length - 1;
    for (let i = len; i >= 0; i--) {
      setTimeout(() => {
        const j = Math.floor(Math.random() * i);
        const temp = numbers[i];
        const randomElement = document.getElementById(j);
        randomElement.classList.add("red");

        numbers[i] = numbers[j];
        numbers[j] = temp;
        steps.push({
          numberFirstIndex: i,
          numberSecondIndex: j,
          numberOne: temp,
          numberTwo: numbers[j]
        });

        const currentElement = document.getElementById(i);
        setTimeout(() => {
          randomElement.classList.remove("red");
          randomElement.classList.add("blue");
          this.setState({ numbers, steps });
        }, 1000);

        setTimeout(() => {
          randomElement.classList.remove("red");
          currentElement.classList.remove("blue");
        }, 3000);
      }, 1000 * 2);
    }

    return [numbers, steps];
  };

  // animate = () => {};

  render() {
    return (
      <div className="main">
        <button onClick={this.change}>Randomize</button>
        <div className="numbers">{this.state.numbers}</div>
      </div>
    );
  }
}

export default App;
