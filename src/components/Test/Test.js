import React, { Component } from 'react'

export default class Test extends Component {
    
    state ={
        title:'',
        body:'',
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => this.setState({
            title:json.title,
            body:json.body,
        }))
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>
                    {this.state.body}
                </p>
            </div>
        )
    }
}
