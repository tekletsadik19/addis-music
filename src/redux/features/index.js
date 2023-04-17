import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import playerSlice from '@/redux/features/playerSlice';

export default combineReducers({
    form:formReducer,
    player:playerSlice
});
