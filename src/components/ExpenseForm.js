import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import 'react-dates/lib/css/_datepicker.css'

// const date = new Date() this is the js date tool.. but it sucks

const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseFrom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // using moment() instead of Date()
            calendarFocused: false,
            errorState: '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description })) // this is using the es6 shorthand since the variable description is the same as the state
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        // this is a diferent way to do that same thing as onDescriptionChange. You need the persist() because the set state is a callback
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        // using regex101.com to create the regular expesion for the validation
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // the .match() funciton takes in a regex. somehow.. doing this here prevents the form from taking in anything that doesn't match. I am not sure how this is working.. but it does seem to work... I think I get it now. It is a controlled form, so you don't update state unless it matches. the state determines what is in the form so you can't update it unless it matches
            this.setState(() => ({ amount }))
        }
    }
    // using moment.js library for the date picker. we also are using an air B&B tool air airbnb/react-dates, react dates has another dependency.. you also needed to install... so the whole thing is 'yarn add moment@2.18.1 react-dates@12.7.0 react-dates-shallow-compare@15.6.0' all three of these need to be there for the calendar picker to work. the docs tell you all the props that need to be on  <SingleDateSicker/> and the optional props are explained too
    onDateChange = (createdAt) => {
        if (createdAt) { // this if prevents the user from clearing the date
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => { // destructuring the object to get the focusedproperty
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            // set error state to "please provide descrition or amount"
            this.setState(() => ({ errorState: 'Please provide a description AND an amount' }))
        } else {
            // clear error
            this.setState(() => ({ errorState: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // convert terxt to number in cents
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    {this.state.errorState && <p>{this.state.errorState}</p> }
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} 
                    />
                    <input 
                        type="text" // the type is text instead of number so we can enforce validation in the handler
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} 
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt} // several of these are required some are optional. need to check docs
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1} // sets months displayed on picker to 1
                        isOutsideRange={() => false } // allows you to pick dates before today
                    />
                    <textarea 
                        placeholder="Add a note for expense (optional)"
                        value={this.state.note} 
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}