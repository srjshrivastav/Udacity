import { combineReducers} from 'redux'

import todos from './todo'
import goals from './goal'
import loading from './loading'

export default combineReducers({
    todos,
    goals,
    loading
})