import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4">
                    <span className="text-danger">404</span> Error Page not Found
                </h1>

                <p className="lead">Sorry, this page is not avaliable</p>
            </div>
        )
    }
}
