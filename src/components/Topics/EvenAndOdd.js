import React, { Component } from 'react'


class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleChange = (e) => {
        this.setState({ userInput: e.target.value })
    }

    handleClick(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }

        this.setState({ evenArray: evens, oddArray: odds });
    }

    render() {
        return (
            <div className="puzzleBos evenAndOddPb">
                <h4>EvensAndOdd</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button onClick={() => this.handleClick(this.state.userInput)} className="confirmationButton"></button>
                <span className="resultsBox">evenArray</span>
                <span className="resultsBox">oddArray</span>
            </div>
        )
    }
}

export default EvenAndOdd