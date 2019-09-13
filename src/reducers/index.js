import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'All Star', duration: '4:05' },
        { title: 'Rollin', duration: '3:45'},
        { title: 'Sunrise', duration: '5:15'},
        { title: 'Throwin Elbows', duration: '3:00'},
    ]
}

const selectedSongReducer = (song = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } else {
        return song;
    };
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})