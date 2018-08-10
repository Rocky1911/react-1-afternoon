import React, { Component } from 'react'


class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["Larry", "Curly", "Moe"],
            userInput: " ",
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    handleChange(e) {
        this.setState({ userInput: e })
    }
    handleClick(userInput) {
        var name = this.state.unFilteredArray
        var filteredArray = []

        for (var i = 0; i < name.length; i++)
            if (name[i].includes(userInput)) {
                filteredArray.push(name[i])
            }
        this.setState({ filteredArray })
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB" >
                <h4>"Filter String"</h4>
                <span className="puzzleText">unFilteredArray</span>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" type="text" />
                <button onClick={() => this.handleClick(this.state.userInput)} className="confirmationButton"></button>
                <span className="resultsBox filterStringRB">filteredArray</span>
            </div >
        )
    }
}

export default FilterString