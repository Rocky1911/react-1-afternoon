import React, { Component } from 'react'


class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e) {
        this.setState({ number1: parseInt(e, 10) })
    }
    handleChange(e) {
        this.setState({ number2: parseInt(e, 10) })
    }
    handleClick(number1, number2) {

        this.setState({ sum: number1 += number2 });
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" type="text" />
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" type="text" />
                <button onClick={() => this.handleClick(this.state.number1, this.state.number2)} className="confirmationButton" >Add</button>
                <span className="resultsBox">sum</span>
            </div>
        )
    }
}

export default Sum