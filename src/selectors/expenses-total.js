import moment from 'moment'


export default (expenses) => {
    if (expenses.length === 0) {
        return 0
    } else {
        return expenses
        .map((expense) => expense.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}

// const expenses = [{
//     id: '1',
//     description: 'gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     id: '2',
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     id: '3',
//     description: 'credit card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }]

// noExpense = []

// const getExpensesTotal = (expenses) => expenses
//     .map((expense) => expense.amount)
//     .reduce((accumulator, currentValue) => accumulator + currentValue)



// const total = getExpensesTotal(expenses)

// console.log(total)