import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import playerSlice from '@/redux/features/playerSlice';
import {spotifyApi} from '@/redux/services/spotifyCore';
import libraryReducer from '@/redux/features/librarySlice'

export default combineReducers({
    [spotifyApi.reducerPath]:spotifyApi.reducer,
    form:formReducer,
    player:playerSlice,
    library:libraryReducer
});
