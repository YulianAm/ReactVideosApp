import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Maldives');
    }   

    onTermSubmit = async e => {
        const response = await youtube.get('/search',
            {
                params: { q: e }
            });

        this.setState({ videos: response.data.items ,
            selectedVideo: response.data.items[0]
        });

    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
        console.log(this.state.selectedVideo);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">  
                            <VideoDetail video={this.state.selectedVideo} /> 
                            </div>
                        <div className="five wide column">  
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;