import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class songList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button 
                            onClick={() => this.props.selectSong(song)}
                            className='ui button primary'
                        >
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    };


    //this.props === mapStateToProps
    render() {
        return(
            <div className='ui divided list'>{this.renderList()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    //songs is the value that gets set to props, with the state.songs value being what gets passed into that prop
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps, { selectSong })(songList);
