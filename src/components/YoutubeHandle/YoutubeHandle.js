import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import YoutubeAPI from '../SenderAPI/YoutubeAPI'
import VideoList from './VideoList'





export default class YoutubeHandle extends Component {
    
    state = {
        videos:[],
        selectedVideo : null
    }

    handleSubmit = async (termToSearch) => {
        const response = await YoutubeAPI.get('/search',{
            params:{
                q:termToSearch
            }
        })
        
        this.setState({
            videos:response.data.items
        })
        console.log("this is resp",response.data);
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }
    
    
    render() {
        return (
            <div>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div>
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div >
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos = {this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
