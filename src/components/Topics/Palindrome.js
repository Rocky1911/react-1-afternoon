import React, { Component } from 'react'


class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: " ",
            palindrome: " "
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e) {
        this.setState({ userInput: e })
    }
    handleClick(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if (forwards === backwards) {
            this.setState({ palindrome: 'true' });
        } else {
            this.setState({ palindrome: 'false' });
        }
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" type="text" />
                <button onClick={() => this.handleClick(this.state.userInput)} className="confirmationButton" >ConfirmButton</button>
                <span className="resultBox" >palindrome</span>
            </div>

        )
    }
}

export default Palindrome