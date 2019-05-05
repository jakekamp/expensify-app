import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('set text filter to default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('set text filter to test text', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})