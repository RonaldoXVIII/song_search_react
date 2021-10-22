import React, { Component } from 'react'


const searchStryleBar = {
    width : "600px",
    borderRadius: "20px",
    height:"40px",
    textAlign:"center",
    cursor: "text"
}
const titlePlace = {
    textAlign: "center",
    fontSize: "3rem",
    textShadow: "0 0 10px #fff, 0 0 20px #fff ,0 0 30px #e60073,0 0 40px #e60073,0 0 50px #e60073,0 0 60px #e60073,0 0 70px #e60073"
}

export default class SearchBar extends Component {

    handleChange = (e) =>{
        this.setState({
            term: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }


    

    render() {
        return (
            <>
            <h2 style={titlePlace}>Welcome to MyPlace</h2>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <input style={searchStryleBar} onChange={this.handleChange} name="video-search" type="text" placeholder="Search..."></input>
                    </div>
                </form>    
            </div>
            </>
        )
    }
}
