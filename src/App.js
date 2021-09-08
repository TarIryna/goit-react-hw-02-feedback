import './App.css';
import React, { Component } from 'react';
import Controls from './components/Controls';
import Statistics from './components/Statistics';

class App extends Component {

   state = {
    good: 0,
    neutral: 0,
    bad: 0
   };
  
    addGood = () => {
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
    };
    addNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    addBad = () => {
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
    };

  countTotal = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositivePercentage = () => {
    if (this.state.good > 0) {
      return Math.round(this.state.good / this.countTotal() * 100);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Controls
          onGood={this.addGood}
          onNeutral={this.addNeutral}
          onBad={this.addBad}
        />
        { this.countTotal()>0 &&  (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotal()}
            percentage={this.countPositivePercentage()}
        />)
        }
      
         </div>
  );
}
}

export default App;
