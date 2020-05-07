import check from './checker'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'react-redux'

export default applyMiddleware(
    thunk,
    check
)