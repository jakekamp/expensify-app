import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense generator', () => {
    const action = editExpense( '123', {
        description: 'abc',
        note: 'new note',
        amount: '1200',
        createdAt: '1000',
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            description: 'abc',
            note: 'new note',
            amount: '1200',
            createdAt: '1000',
        }
        
    })
})

test('should set up add expense action abject with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: '109500',
        createdAt: '1000',
        note: 'this was rent',
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        }
    })
})

test('should set up add expense action abject with defaults', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
        }
    })
})
