import React, { Component } from 'react'


class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: "Tom",
                    age: 20
                },
                {
                    name: "Curly",
                    age: 30
                },
                {
                    name: "Moe",
                    age: 70
                }
            ],
            userInput: "",
            filteredArray: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange = e => {
        this.setState({ userInput: e.target.value })
    }
    handleClick() {
        var clowns = this.state.unFilteredArray;
        var filteredArray = []

        for (var i = 0; i < clowns.length; i++) {
            if (!clowns[i] === filteredArray) {
                filteredArray.push(clowns[i])
            }
        }
        this.setState({ filteredArray })
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">unFilteredArray</span>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" type="text" />
                <button onClick={() => this.handleClick()} className="confirmationButton">ConfirmButton</button>
                <span className="resultsBox filterObjectRB">filteredArray</span>
            </div>
        )
    }
}

export default FilterObject